
import Link from "next/link";
import {
  Home,
  Search,
  ShoppingBasket,
  ArrowLeft,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl text-center">
        <div className="relative mx-auto mb-8 flex h-48 w-48 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-brand/5" />

          <div className="absolute inset-4 rounded-full border border-dashed border-brand/20" />

          <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-brand/10 bg-componentColor shadow-sm">
            <ShoppingBasket
              size={52}
              strokeWidth={1.4}
              className="text-brand"
            />

            <span className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-md">
              ?
            </span>
          </div>

          <span className="absolute top-10 left-2 h-3 w-3 rounded-full bg-brand/20" />
          <span className="absolute right-2 bottom-7 h-4 w-4 rounded-full bg-brand/30" />
          <span className="absolute bottom-2 left-12 h-2 w-2 rounded-full bg-brand/40" />
        </div>

        <p className="mb-3 text-sm font-bold tracking-[0.3em] text-brand uppercase">
          Error 404
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight text-primaryText sm:text-5xl">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-primaryText/70 sm:text-base">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না।
          লিংকটি ভুল হতে পারে অথবা পেজটি সরিয়ে ফেলা হয়েছে।
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:opacity-90 sm:w-auto"
          >
            <Home size={18} />
            হোমপেজে ফিরে যান
          </Link>

          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand/20 px-6 py-3.5 text-sm font-semibold text-brand transition-colors duration-200 hover:bg-brand/5 sm:w-auto"
          >
            <ArrowLeft size={18} />
            বাজারদরে ফিরে যান
          </Link>
        </div>

        <div className="mx-auto mt-12 max-w-sm border-t border-primaryText/10 pt-6">
          <p className="text-sm text-primaryText/60">
            বাজারদর দেখতে চাইছেন?
          </p>

          <Link
            href="/"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-opacity hover:opacity-75"
          >
            <Search size={16} />
            আমাদের হোমপেজ ঘুরে দেখুন
          </Link>
        </div>
      </div>
    </main>
  );
}