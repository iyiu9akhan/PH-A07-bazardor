import { Suspense } from "react";
import Products from "@/components/allProducts/Products";
import ProductsSkeleton from "@/components/allProducts/ProductsSkeleton";
import Banner from "@/components/banner/Banner";
import IncreasedProducts from "@/components/IncreasedProducts/IncreasedProducts";
import DecreasedProducts from "@/components/DecreasedProducts/DecreasedProducts";

async function FetchProducts() {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products", {
    cache: "no-store",
  });
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
        <Suspense fallback={<ProductsSkeleton />}>
          <FetchProducts />
        </Suspense>
      </main>
    </div>
  );
}