"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categoryType } from "@/types/apiDataType";

export default function CategoryData({ data }: { data: categoryType[] }) {
  const pathname = usePathname();

  return (
    <div className="border border-[#F0F5F0] bg-componentColor">
      <div className="mx-auto w-full max-w-6xl px-4">
        <ul className="flex items-center gap-1 overflow-x-auto my-2">
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
