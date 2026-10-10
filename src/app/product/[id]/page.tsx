import ProductDetails from "@/components/allProducts/ProductDetails";
import { Suspense } from "react";
import Link from "next/link";
import localData from "../../../../public/data.json";
import ProductDetailsSkeleton from "@/components/allProducts/ProductDetailsSkeleton";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function ProductContent({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.id?.toLowerCase().trim();

  let products = [];

  try {
    // const res = await fetch(
    //   "https://api.abcz.workers.dev/api/bazardor/products",
    //   { cache: "no-store" },
    // );
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/products",
      { cache: "no-store" },
    );

    if (!res.ok) {
      throw new Error("First API failed");
    }

    products = await res.json();
    console.log("productsDetails: fetched from first api");
  } catch (error) {
    console.log("First API failed, trying second API...", error);

    try {
      const res2 = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products",
        { cache: "no-store" },
      );

      if (!res2.ok) {
        throw new Error("Second API failed");
      }

      products = await res2.json();
      console.log("productsDetails: fetched from second api");
    } catch (err2) {
      console.log("Both APIs failed, falling back to local data.json...", err2);
      products = localData.products || [];
    }
  }

  const product = products.find(
    (p: any) => p.slug?.toLowerCase().trim() === slug,
  );

  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm">
          <div className="w-20 h-20 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-inner text-emerald-600">
            🔍
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            পণ্যটি খুঁজে পাওয়া যায়নি
          </h1>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            দুঃখিত, আপনি যে পণ্যটি খুঁজছেন তা বর্তমানে আমাদের তালিকায় নেই।
          </p>
          <Link
            href="/"
            className="inline-block w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-all shadow-sm hover:shadow"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    );
  }

  return <ProductDetails product={product} />;
}

export default function ProductPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <ProductContent params={params} />
    </Suspense>
  );
}
