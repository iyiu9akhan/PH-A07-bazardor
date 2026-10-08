import React from "react";
import { ProductType } from "@/types/apiDataType";
import ProductCard from "@/components/allProducts/ProductCard";

interface ProductsProps {
  products: ProductType[];
}

const IncreasedProducts = ({ products }: ProductsProps) => {
  const increasedList = products
    ?.filter((item) => item.change?.dir === "up")
    ?.sort((a, b) => b.change.pct - a.change.pct)
    ?.slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto px-4 scroll-mt-32 mt-10 mb-4" >
      <div className="flex gap-2 items-center">
        <span className="text-red-600 text-[16px] leading-6">▲</span>
        <h1 className="font-bold text-[20px] leading-7 text-primaryText mb-3">
          আজ দাম বেড়েছে
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {increasedList?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default IncreasedProducts;
