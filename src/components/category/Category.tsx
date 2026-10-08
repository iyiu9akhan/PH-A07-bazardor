import { cacheLife } from "next/cache";
import { categoryType } from "@/types/apiDataType";
import ActiveCategory from "@/components/category/ActiveCategory";
import CategoryList from "@/components/category/CategoryList";

import { Suspense } from "react";

const Category = async () => {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );

  const data: categoryType[] = await res.json();

  return (
    <Suspense fallback={<CategoryList data={data} />}>
      <ActiveCategory data={data} />
    </Suspense>
  );
};

export default Category;
