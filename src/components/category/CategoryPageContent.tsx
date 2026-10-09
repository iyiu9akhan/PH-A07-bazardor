import { categoryType } from "@/types/CategoryType";
import CategorySorting from "@/components/category/CategorySorting";

async function CategoryPageContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${id}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

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

  const products: categoryType[] = await res.json();

  const categoryTitle = products?.[0]?.categoryNameBn || id;
  const categoryIcon = products?.[0]?.categoryIcon || id;

  return (
    <div>
      <div className="flex items-center gap-4 mb-6 bg-componentColor p-5.25 rounded-2xl">
        <div className="text-[40px]">{categoryIcon}</div>
        <div>
          <h1 className="font-bold text-[24px] leading-8 text-primaryText">
            {categoryTitle}
          </h1>
          <p className="font-normal text-[14px] leading-5 text-primaryText/75">
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