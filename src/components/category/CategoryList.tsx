import Link from "next/link";
import { categoryType } from "@/types/apiDataType";

export default function CategoryList({
  data,
  pathname,
}: {
  data: categoryType[];
  pathname?: string;
}) {
  return (
    <div className="border-y border-[#E1E8E1] bg-componentColor">
      <div className="mx-auto w-full max-w-6xl px-4">
        <ul className="flex items-center gap-1 overflow-x-auto py-2">
          {data.map((c: categoryType) => {
            const categoryPath = `/category/${c.id}`;
            const isActive = pathname === categoryPath;

            return (
              <li className="shrink-0" key={c.id}>
                <Link
                  href={categoryPath}
                  className={`flex items-center gap-1 px-3.75 py-1.75 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand text-white"
                      : "hover:bg-[#E0E5E0] text-zinc-700"
                  }`}
                >
                  <span>{c.icon}</span>
                  <span>{c.nameBn}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}