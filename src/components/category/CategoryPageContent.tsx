import { notFound } from "next/navigation";
import { categoryType } from "@/types/CategoryType";
import CategorySorting from "@/components/category/CategorySorting";

async function CategoryPageContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // const res = await fetch(
  //   `https://api.abcz.workers.dev/api/bazardor/products?category=${encodeURIComponent(id)}`,
  //   {
  //     next: {
  //       revalidate: 60,
  //     },
  //   },
  // );
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(id)}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!res.ok) {
    notFound();
  }

  const products: categoryType[] = await res.json();

  if (!Array.isArray(products) || products.length === 0) {
    notFound();
  }

  const convertToBanglaNumber = (num: number) => {
    const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

    return num
      .toString()
      .split("")
      .map((char) => {
        const index = englishNumbers.indexOf(char);
        return index !== -1 ? banglaNumbers[index] : char;
      })
      .join("");
  };

  const categoryTitle = products[0].categoryNameBn;
  const categoryIcon = products[0].categoryIcon;

  return (
    <div>
      <div className="mb-6 flex items-center gap-4 rounded-2xl border border-[#E1E8E1] bg-componentColor p-5.25">
        <div className="text-[40px]">{categoryIcon}</div>

        <div>
          <h1 className="text-[24px] leading-8 font-bold text-primaryText">
            {categoryTitle}
          </h1>

          <p className="text-[14px] leading-5 font-normal text-primaryText/75">
            {convertToBanglaNumber(products.length)}টি পণ্যের আজকের দাম ও
            পরিবর্তন
          </p>
        </div>
      </div>

      <CategorySorting initialProducts={products} />
    </div>
  );
}

export default CategoryPageContent;
