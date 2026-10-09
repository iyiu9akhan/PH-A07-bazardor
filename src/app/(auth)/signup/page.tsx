import Link from "next/link";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <div className="  px-4 py-8.5">
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-center font-bold text-[24px] leading-8 text-primaryText">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="mt-1 text-center font-normal text-[14px] leading-5 text-primaryText/70">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>

        <div className="mt-6 rounded-2xl border border-[#E1E8E1] bg-componentColor p-8">
          <SignupForm />
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-[14px] leading-5 text-primaryText/60 hover:text-primaryText transition-colors"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
}