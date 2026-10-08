import { ProductType } from "@/types/apiDataType";
import React from "react";
import ProductCard from "@/components/allProducts/ProductCard";

interface ProductsProps {
  products: ProductType[];
}

const DecreasedProducts = ({ products }: ProductsProps) => {
  const decreasedList = products
    ?.filter((item) => item.change?.dir === "down")
    ?.sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
    ?.slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto px-4 scroll-mt-32 mt-10 " >
      <div className="flex gap-2 items-center mb-3">
        <span className="text-green-600 text-[16px] leading-6">▼</span>
        <h1 className="font-bold text-[20px] leading-7 text-primaryText">
          আজ দাম কমেছে
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {decreasedList?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DecreasedProducts;