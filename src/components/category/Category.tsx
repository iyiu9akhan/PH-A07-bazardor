import { cacheLife } from "next/cache";
import { categoryType } from "@/types/apiDataType";
import CategoryData from "./CategoryData";

const Category = async () => {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",

  );
  const data: categoryType[] = await res.json();

  return <CategoryData data={data} />;
};

export default Category;