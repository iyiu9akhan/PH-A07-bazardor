import React from "react";
import Link from "next/link";
import { ProductType } from "@/types/apiDataType";

interface ProductCardProps {
  item: ProductType;
}

const ProductCard = ({ item }: ProductCardProps) => {
  const convertToBanglaNumber = (num: number) => {
    const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

    return num
      .toString()
      .split("")
      .map((char) => {
        const index = englishNumbers.indexOf(char);
        return index !== -1 ? banglaNumbers[index] : char;
      })
      .join("");
  };

  const getBanglaUnit = (unit: string) => {
    switch (unit?.toLowerCase()) {
      case "kg":
        return "কেজি";
      case "liter":
      case "litre":
        return "লিটার";
      case "pcs":
      case "piece":
        return "পিস";
      case "dozen":
        return "ডজন";
      case "gram":
        return "গ্রাম";
      default:
        return unit;
    }
  };

  const getDirInfo = (dir: string) => {
    switch (dir) {
      case "up":
        return { icon: "▲", color: "text-red-600" };
      case "down":
        return { icon: "▼", color: "text-green-600" };
      default:
        return { icon: "—", color: "text-gray-500" };
    }
  };

  const { icon, color } = getDirInfo(item.change?.dir);

  return (
    <Link href={`/product/${item.slug}`}>
      <div className="bg-componentColor p-4 rounded-xl border border-base-300 hover:border hover:border-brand duration-200 transition-colors hover:shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#f0f5f0] text-2xl">
            {item.image}
          </span>
          <div>
            <p className="font-semibold text-[16px] leading-6 text-primaryText">
              {item.nameBn}
            </p>
            <p className="font-normal text-[12px] leading-4 text-primaryText">
              প্রতি {getBanglaUnit(item.unit)}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="font-normal text-[12px] leading-4 text-primaryText">
              আজকের দাম
            </p>
            <p className="font-bold text-[20px] leading-7 text-primaryText">
              {convertToBanglaNumber(item.today)}{" "}
              <span className="font-medium text-[14px] leading-7">টাকা</span>
            </p>
          </div>
          <div className="flex items-center gap-1 px-2 rounded-full bg-[#F0F5F0]">
            <span className={color}>{icon}</span>
            <p className={`${color} font-semibold text-[12px] leading-4`}>
              {item.change.dir === "equal" || item.change.pct === 0
                ? "০.০%"
                : `${convertToBanglaNumber(Math.abs(item.change.pct))}%`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
