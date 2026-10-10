import { Suspense } from "react";
import Products from "@/components/allProducts/Products";
import ProductsSkeleton from "@/components/allProducts/ProductsSkeleton";
import Banner from "@/components/banner/Banner";
import IncreasedProducts from "@/components/IncreasedProducts/IncreasedProducts";
import DecreasedProducts from "@/components/DecreasedProducts/DecreasedProducts";
import localData from "../../public/data.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "বাজারদর | আজকের নিত্যপণ্যের দাম",
  description:
    "চাল, ডাল, তেল, সবজি, মাছ, মাংস ও মসলার আজকের বাজার দর এবং দাম বাড়া-কমার খবর এক জায়গায় দেখুন।",
};

async function FetchProducts() {
  let products = [];

  try {
    // const res = await fetch(
    //   "https://api.abcz.workers.dev/api/bazardor/products",
    //   {
    //     cache: "no-store",
    //   },
    // );
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/products",
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error("First API failed");
    }

    products = await res.json();
  } catch (error) {
    console.log("First API failed, trying second API...", error);

    try {
      const res2 = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products",
        {
          cache: "no-store",
        },
      );

      if (!res2.ok) {
        throw new Error("Second API failed");
      }

      products = await res2.json();
    } catch (err2) {
      console.log("Both APIs failed, falling back to local data.json...", err2);
      products = localData.products || [];
    }
  }

  return (
    <>
      <IncreasedProducts products={products} />
      <DecreasedProducts products={products} />
      <Products products={products} />
    </>
  );
}

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <Suspense fallback={<ProductsSkeleton />}>
          <FetchProducts />
        </Suspense>
      </main>
    </div>
  );
}
