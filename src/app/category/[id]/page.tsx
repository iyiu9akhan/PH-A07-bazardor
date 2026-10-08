import { Suspense } from "react";
import CategoryPageContent from "@/components/category/CategoryPageContent";

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
