import { cacheLife } from "next/cache";
import { categoryType } from "@/types/apiDataType";
import CategoryData from "./CategoryData";
import { Suspense } from "react";

const Category = async () => {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
    {
      next: {
        revalidate: 60,
      },
    },
  );

  const data: categoryType[] = await res.json();

  return (
    <Suspense fallback={null}>
      <CategoryData data={data} />
    </Suspense>
  );
};

export default Category;
