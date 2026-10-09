"use client";

import React from "react";
import Link from "next/link";
import { Product } from "@/types/ProductDetails";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const convertToBanglaNumber = (
    num: number | string,
    abs: boolean = false,
  ) => {
    const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

    let valueStr = abs ? Math.abs(Number(num)).toString() : num.toString();

    return valueStr
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

  const minPrices = product.markets?.map((m) => m.min) || [0];
  const maxPrices = product.markets?.map((m) => m.max) || [0];

  const lowestPrice = Math.min(...minPrices);
  const highestPrice = Math.max(...maxPrices);

  const getAverage = (min: number, max: number) => {
    return ((min + max) / 2).toFixed(1);
  };

  const isUp = product.change?.dir === "up";
  const diffAmount = Math.abs(product.today - product.yesterday);

  const sortedMarkets = [...(product.markets || [])].sort(
    (a, b) => a.min - b.min,
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="breadcrumbs font-normal text-[14px] leading-5 text-primaryText mb-8">
        <ul>
          <li>
            <Link href="/" className="hover:text-emerald-600">
              হোম
            </Link>
          </li>
          <li>
            <Link
              href={`/category/${product.category}`}
              className="hover:text-emerald-600"
            >
              {product.categoryNameBn || product.category}
            </Link>
          </li>
          <li className="text-brand font-medium">{product.nameBn}</li>
        </ul>
      </div>

      <div className="bg-componentColor border border-[#E1E8E1] rounded-2xl p-6  flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-[#F0F5F0] rounded-2xl text-[36px] flex items-center justify-center">
            {product.image}
          </div>
          <div>
            <h1 className="text-[30px]  font-bold leading-9 text-primaryText">
              {product.nameBn}
            </h1>
            <p className="font-normal text-[14px] leading-5 text-primaryText/70 mb-2">
              প্রতি {getBanglaUnit(product.unit)} ·{" "}
              {product.categoryNameBn || product.category}
            </p>
            <p className="font-normal text-[14px] leading-5 text-primaryText">
              গতকালের তুলনায় আজ দাম{" "}
              <span className=" font-semibold">
                {isUp ? "বেড়েছে" : "কমেছে"} {convertToBanglaNumber(diffAmount)}{" "}
                টাকা
              </span>
            </p>
          </div>
        </div>

        <div className=" rounded-2xl px-5 py-4 text-center bg-[#F0F5F0]">
          <span className="font-normal text-[14px] leading-5 text-primaryText/70 block">
            আজকের দাম
          </span>
          <span className="font-bold text-[30px] leading-9 text-primaryText">
            {convertToBanglaNumber(product.today)}
          </span>
          <span className="font-normal text-[14px] leading-5 text-primaryText/70 block">
            টাকা / {getBanglaUnit(product.unit)}
          </span>
          <span
            className={`font-semibold text-[14px] leading-5 ${isUp ? "text-[#D03739]" : "text-brand"}`}
          >
            {isUp ? "▲" : "▼"}{" "}
            {convertToBanglaNumber(product.change?.pct, true)}%
          </span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          দামের সারসংক্ষেপ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <span className="text-xs text-gray-500 block mb-1">
              সর্বনিম্ন দাম
            </span>
            <span className="text-2xl font-bold text-emerald-600 block mb-1">
              {convertToBanglaNumber(lowestPrice)} টাকা
            </span>
            <span className="text-xs text-gray-400">
              সবচেয়ে কম দামের বাজার
            </span>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <span className="text-xs text-gray-500 block mb-1">
              সর্বাধিক দাম
            </span>
            <span className="text-2xl font-bold text-red-500 block mb-1">
              {convertToBanglaNumber(highestPrice)} টাকা
            </span>
            <span className="text-xs text-gray-400">
              সবচেয়ে বেশি দামের বাজার
            </span>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <span className="text-xs text-gray-500 block mb-1">গড় দাম</span>
            <span className="text-2xl font-bold text-gray-800 block mb-1">
              {convertToBanglaNumber(product.today)} টাকা
            </span>
            <span className="text-xs text-gray-400">প্রতি কেজি-এর হিসাবে</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">
            বাজারভিত্তিক আজকের দাম
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/70 text-gray-600 text-sm border-b border-gray-100">
                <th className="py-3.5 px-6 font-medium">বাজার</th>
                <th className="py-3.5 px-6 font-medium">বিভাগ</th>
                <th className="py-3.5 px-6 font-medium">সর্বনিম্ন</th>
                <th className="py-3.5 px-6 font-medium">সর্বাধিক</th>
                <th className="py-3.5 px-6 font-medium">গড়</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {sortedMarkets.map((m, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-4 px-6 text-gray-900 font-medium">
                    {m.market}
                  </td>
                  <td className="py-4 px-6 text-gray-600">{m.division}</td>
                  <td className="py-4 px-6 text-gray-800">
                    {convertToBanglaNumber(m.min)} টাকা
                  </td>
                  <td className="py-4 px-6 text-gray-800">
                    {convertToBanglaNumber(m.max)} টাকা
                  </td>
                  <td className="py-4 px-6 text-gray-900 font-medium">
                    {convertToBanglaNumber(getAverage(m.min, m.max))} টাকা
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
