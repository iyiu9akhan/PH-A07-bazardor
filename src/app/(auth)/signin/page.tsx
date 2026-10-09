import Link from "next/link";
import SigninForm from "@/components/auth/SigninForm";

export default function SigninPage() {
  return (
    <div className=" 0 px-4 py-10">
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-center font-bold text-[24px] leading-8 text-primaryText">
          সাইন ইন
        </h1>
        <p className="mt-1 text-center font-normal text-[14px] leading-5 text-primaryText/70">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>

        <div className="mt-6 rounded-2xl border border-[#E1E8E1] bg-componentColor  p-8">
          <SigninForm />
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
