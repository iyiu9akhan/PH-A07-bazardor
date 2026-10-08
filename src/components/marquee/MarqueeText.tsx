import { Product } from "@/types/apiDataType";

async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  return Array.isArray(data) ? data : data.products || [];
}

const convertToBanglaNumber = (num: number | string) => {
  const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  return String(num).replace(/[0-9]/g, (digit) => {
    return banglaNumbers[Number(digit)];
  });
};

const getBanglaUnit = (unit: string) => {
  switch (unit?.toLowerCase()) {
    case "kg":
      return "কেজি";
    case "litre":
    case "liter":
      return "লিটার";
    case "pcs":
    case "piece":
      return "পিস";
    case "gm":
    case "gram":
      return "গ্রাম";
    default:
      return unit;
  }
};

export default async function MarqueeText() {
  const products = await getProducts();

  if (!products.length) {
    return null;
  }

  return (
    <>
      <style>{`
        .marquee-track {
          animation: marquee 100s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="w-full overflow-hidden border-y border-[#E1E8E1] bg-componentColor">
        <div className="marquee-track flex w-max">
          {[...products, ...products].map((product, index) => {
            const isUp = product.change?.dir === "up";
            const changePct = product.change?.pct ?? 0;

            return (
              <div
                key={`${product.id}-${index}`}
                className="flex shrink-0 items-center gap-2 px-6 py-2 text-[14px] font-medium leading-5 border-l border-[#F0F5F0]"
              >
                <span>{product.image || product.categoryIcon}</span>

                <span className="text-slate-700">
                  {product.nameBn}
                </span>

                <span className="font-semibold text-slate-900">
                  {convertToBanglaNumber(product.today)} টাকা/
                  {getBanglaUnit(product.unit)}
                </span>

                {changePct !== 0 && (
                  <span
                    className={
                      isUp
                        ? "text-xs text-red-600"
                        : "text-xs text-green-600"
                    }
                  >
                    {isUp ? "▲" : "▼"}{" "}
                    {convertToBanglaNumber(changePct)}%
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}