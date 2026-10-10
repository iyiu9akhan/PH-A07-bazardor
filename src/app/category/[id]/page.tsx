import { Suspense } from "react";
import CategoryPageContent from "@/components/category/CategoryPageContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const categoryNames: Record<string, string> = {
  chal: "চাল",
  dal: "ডাল",
  tel: "তেল",
  sobji: "সবজি",
  mach: "মাছ",
  mangsho: "মাংস",
  "dim-dui": "ডিম-দুধ",
  mosla: "মসলা",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const key = decodeURIComponent(id).toLowerCase().trim();
  const category = categoryNames[key] ?? key;

  return {
    title: `${category} এর আজকের দাম | বাজারদর`,
    description: `${category} ক্যাটাগরির সব পণ্যের আজকের বাজার দর ও দাম বাড়া-কমার তথ্য দেখুন।`,
  };
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6">
      <Suspense
        fallback={
          <div className="flex justify-center py-10">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-brand"></div>
          </div>
        }
      >
        <CategoryPageContent params={params} />
      </Suspense>
    </div>
  );
}
