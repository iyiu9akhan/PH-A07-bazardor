import { Suspense } from "react";
import Products from "@/components/allProducts/Products";
import Banner from "@/components/banner/Banner";
import IncreasedProducts from "@/components/IncreasedProducts/IncreasedProducts";
import DecreasedProducts from "@/components/DecreasedProducts/DecreasedProducts";

async function FetchProducts() {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    {
      cache: "no-store",
    },
  );
  const products = await res.json();

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
      <Suspense
  fallback={
    <div className="flex items-center justify-center gap-3 py-10 text-primaryText">
      <div className="size-6 animate-spin rounded-full border-2 border-brand border-t-white"></div>
      <p className="text-[14px] font-medium">নিত্যপণ্যের দরদাম যাচাই করা হচ্ছে, একটু অপেক্ষা করুন...</p>
    </div>
  }
>
  <FetchProducts />
</Suspense>
      </main>
    </div>
  );
}
