import { ProductType } from "@/types/apiDataType";
import ProductCard from "./ProductCard";

interface ProductsProps {
  products: ProductType[];
}

const Products = ({ products }: ProductsProps) => {
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

  return (
    <div className="max-w-6xl mx-auto px-4 scroll-mt-32  mb-18 mt-10" id="products">
      <h1 className="font-bold text-[20px] leading-7 text-primaryText mb-3">
        সব পণ্য
      </h1>
      <p className="font-normal text-[14px] leading-5 text-primaryText/70 mb-4">
        মোট {convertToBanglaNumber(products.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;