"use client";
import { useState, useRef, useEffect } from "react";
import ProductCard from "@/components/allProducts/ProductCard";
import { categoryType } from "@/types/CategoryType";

interface CategorySortingProps {
  initialProducts: categoryType[];
}

export default function CategorySorting({
  initialProducts,
}: CategorySortingProps) {
  const [sortOrder, setSortOrder] = useState("default");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const getLabel = (value: string) => {
    if (value === "low") return "দাম: কম থেকে বেশি";
    if (value === "high") return "দাম: বেশি থেকে কম";
    return "ডিফল্ট";
  };

  return (
    <div>
      <div className="mb-4 flex justify-between items-center ">
        <p className="font-normal text-[14px] leading-5 text-primaryText/70">
          মোট {convertToBanglaNumber(products.length)}টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="flex items-center gap-2">
          <span className="text-[14px] leading-5 text-primaryText/70">
            সাজান
          </span>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between gap-3 bg-componentColor text-primaryText rounded-lg border border-primaryText/20 px-3 py-1.5 text-[12px] cursor-pointer shadow-sm outline-none focus:outline-none min-w-36"
            >
              <span>{getLabel(sortOrder)}</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-1 w-full min-w-36 bg-componentColor rounded-2xl border border-gray-200 shadow-md overflow-hidden z-50 text-[12px] py-1">
                <button
                  type="button"
                  onClick={() => {
                    setSortOrder("default");
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 transition-colors flex items-center justify-between ${
                    sortOrder === "default"
                      ? "text-brand font-medium bg-gray-50/50"
                      : "text-primaryText font-medium hover:bg-gray-50/50"
                  }`}
                >
                  <div className="cursor-pointer flex flex-row gap-2">
                    <span>ডিফল্ট</span>
                    {sortOrder === "default" && <span>✓</span>}
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSortOrder("low");
                    setIsOpen(false);
                  }}
                  className={` w-full text-left px-4 py-2.5 transition-colors flex items-center justify-between ${
                    sortOrder === "low"
                      ? "text-brand font-medium bg-gray-50/50"
                      : "text-primaryText font-medium hover:bg-gray-50/50"
                  }`}
                >
                  <div className="cursor-pointer flex flex-row gap-2">
                    <span>দাম: কম থেকে বেশি</span>
                    {sortOrder === "low" && <span>✓</span>}
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSortOrder("high");
                    setIsOpen(false);
                  }}
                  className={` w-full text-left px-4 py-2.5 transition-colors flex items-center justify-between ${
                    sortOrder === "high"
                      ? "text-brand font-medium bg-gray-50/50"
                      : "text-primaryText font-medium hover:bg-gray-50/50"
                  }`}
                >
                  <div className="cursor-pointer flex flex-row gap-2">
                    <span className="cursor-pointer">দাম: বেশি থেকে কম</span>
                    {sortOrder === "high" && <span>✓</span>}
                  </div>
                </button>
              </div>
            )}
          </div>
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
