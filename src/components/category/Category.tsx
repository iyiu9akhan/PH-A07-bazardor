import { cacheLife } from "next/cache";
import { categoryType } from "@/types/apiDataType";
import ActiveCategory from "@/components/category/ActiveCategory";
import CategoryList from "@/components/category/CategoryList";
import { Suspense } from "react";
import localData from "../../../public/data.json";

const Category = async () => {
  "use cache";
  cacheLife("hours");

  let data: categoryType[] = [];

  try {
    // const res = await fetch(
    //   "https://api.abcz.workers.dev/api/bazardor/categories",
    // );
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/categories",
    );

    if (!res.ok) {
      throw new Error("category: first API failed");
    }

    data = await res.json();
    console.log("category: fetched from first api");
  } catch (error) {
    console.log("first api failed, trying second api...", error);

    try {
      const res2 = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/categories",
      );

      if (!res2.ok) {
        throw new Error("category: second API failed");
      }

      data = await res2.json();
      console.log("category: fetched from second api");
    } catch (err2) {
      console.log("both api failed, falling back to local data.json...", err2);
      data = localData.categories as categoryType[];
    }
  }

  return (
    <Suspense fallback={<CategoryList data={data} />}>
      <ActiveCategory data={data} />
    </Suspense>
  );
};

export default Category;
