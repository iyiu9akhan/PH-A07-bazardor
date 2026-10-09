"use client";

import { useState } from "react";
import ProductCard from "@/components/allProducts/ProductCard";
import { categoryType } from "@/types/CategoryType";

interface CategorySortingProps {
  initialProducts: categoryType[];
}

export default function CategorySorting({ initialProducts }: CategorySortingProps) {
  const [sortOrder, setSortOrder] = useState("default");

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

  const products = [...initialProducts];
  if (sortOrder === "low") {
    products.sort((a, b) => a.today - b.today);
  } else if (sortOrder === "high") {
    products.sort((a, b) => b.today - a.today);
  }

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <p className="font-normal text-[14px] leading-5 text-primaryText/70">
          মোট {convertToBanglaNumber(products.length)}টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="flex items-center gap-2">
          <span className="text-[14px] text-primaryText/70">সাজান</span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded-md px-3 py-1.5 text-sm bg-white cursor-pointer"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low">দাম: কম থেকে বেশি</option>
            <option value="high">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}