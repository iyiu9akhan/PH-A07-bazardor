"use client";
import { usePathname } from "next/navigation";
import { categoryType } from "@/types/apiDataType";
import CategoryList from "@/components/category/CategoryList";

export default function CategoryData({ data }: { data: categoryType[] }) {
  const pathname = usePathname();
  return <CategoryList data={data} pathname={pathname} />;
}
