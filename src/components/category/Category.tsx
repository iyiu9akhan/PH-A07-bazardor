// import { cacheLife } from "next/cache";
// import { categoryType } from "@/types/apiDataType";
// import ActiveCategory from "@/components/category/ActiveCategory";
// import CategoryList from "@/components/category/CategoryList";
// import { Suspense } from "react";

// const Category = async () => {
//   "use cache";
//   cacheLife("hours");

//   let data: categoryType[];

//   try {
//     const res = await fetch(
//       "https://api.abcz.workers.dev/api/bazardor/categories",
//     );

//     if (!res.ok) {
//       throw new Error("First API failed");
//     }

//     data = await res.json();
//   } catch (error) {
//     console.log(
//       "first api failed",
//       error,
//     );

//     const res2 = await fetch(
//       "https://api.api-store.workers.dev/api/bazardor/categories",
//     );

//     if (!res2.ok) {
//       throw new Error("Both APIs failed to fetch categories");
//     }

//     data = await res2.json();
//   }

//   return (
//     <Suspense fallback={<CategoryList data={data} />}>
//       <ActiveCategory data={data} />
//     </Suspense>
//   );
// };

// export default Category;


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
    const res = await fetch(
      "https://api.abcz.workers.dev/api/bazardor/categories",
    );

    if (!res.ok) {
      throw new Error("First API failed");
    }

    data = await res.json();
  } catch (error) {
    console.log("first api failed, trying second api...", error);

    try {
      const res2 = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/categories",
      );

      if (!res2.ok) {
        throw new Error("Second API failed");
      }

      data = await res2.json();
    } catch (err2) {
      console.log("Both APIs failed, falling back to local data.json...", err2);
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