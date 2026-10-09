import ProductDetails from "@/components/allProducts/ProductDetails";
import { Suspense } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function ProductContent({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.id?.toLowerCase().trim();

  let products = [];
  try {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products", {
      cache: "no-store",
    });
    if (res.ok) {
      products = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch products", error);
  }

  const product = products.find(
    (p: any) => p.slug?.toLowerCase().trim() === slug
  );

  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-bold text-red-500">
        Product not found! (Slug: {slug})
      </div>
    );
  }

  return <ProductDetails product={product} />;
}

export default function ProductPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <ProductContent params={params} />
    </Suspense>
  );
}