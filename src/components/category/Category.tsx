import { categoryType } from "@/types/apiDataType";
import CategoryData from "./CategoryData";

const Category = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
    { cache: "no-store" },
  );
  const data: categoryType[] = await res.json();

  return <CategoryData data={data} />;
};

export default Category;
