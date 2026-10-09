import { Suspense } from "react";
import Products from "@/components/allProducts/Products";
import ProductsSkeleton from "@/components/allProducts/ProductsSkeleton";
import Banner from "@/components/banner/Banner";
import IncreasedProducts from "@/components/IncreasedProducts/IncreasedProducts";
import DecreasedProducts from "@/components/DecreasedProducts/DecreasedProducts";

async function FetchProducts() {
  let products = [];

  try {
    // Prothom API try korbe
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("First API failed");
    }

    products = await res.json();
  } catch (error) {
    console.log("first api failed");

    const res2 = await fetch("https://api.api-store.workers.dev/api/bazardor/products", {
      cache: "no-store",
    });

    if (!res2.ok) {
      throw new Error("Both product APIs failed");
    }

    products = await res2.json();
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