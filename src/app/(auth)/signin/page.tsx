"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SigninForm from "@/components/auth/SigninForm";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useState } from "react";

export default function SigninPage() {
  const router = useRouter();

  const [googleLoading, setGoogleLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    console.log("Submitted User Data:", user);

    const { data, error } = await authClient.signIn.email({
      ...user,
    });

    if (data) {
      toast.success("সাইন ইন সফল হয়েছে!", {
        duration: 3000,
        style: {
          background: "#FAFCFA",
          color: "#0F1F14",
          border: "1px solid #E1E8E1",
          borderRadius: "12px",
          padding: "12px 16px",
          fontSize: "14px",
          fontWeight: 500,
        },
        iconTheme: {
          primary: "#048A3F",
          secondary: "#fff",
        },
      });

      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 1500);
    }

    if (error) {
      toast.error(error.message || "সাইন ইন করা যায়নি, আবার চেষ্টা করুন");
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    sessionStorage.setItem("signin-toast", "1");
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      sessionStorage.removeItem("signin-toast");
      setGoogleLoading(false);
      toast.error(error.message || "Google দিয়ে লগইন করা যায়নি");
    }
  };

  const handleGithubSignIn = async () => {
    setGithubLoading(true);
    sessionStorage.setItem("signin-toast", "1");
    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });

    if (error) {
      sessionStorage.removeItem("signin-toast");
      setGithubLoading(false);
      toast.error(error.message || "GitHub দিয়ে লগইন করা যায়নি");
    }
  };
  return (
    <div className="px-4 py-10">
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-center font-bold text-[24px] leading-8 text-primaryText">
          সাইন ইন
        </h1>
        <p className="mt-1 text-center font-normal text-[14px] leading-5 text-primaryText/70">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>

        <div className="mt-6 rounded-2xl border border-[#E1E8E1] bg-componentColor p-8">
          <SigninForm
            onSubmit={onSubmit}
            handleGoogleSignIn={handleGoogleSignIn}
            googleLoading={googleLoading}
            handleGithubSignIn={handleGithubSignIn}
            githubLoading={githubLoading}
          />
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
