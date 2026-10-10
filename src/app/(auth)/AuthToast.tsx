"use client";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function AuthToast() {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    console.log("AuthToast:", {
      isPending,
      hasSession: !!session,
      flag: sessionStorage.getItem("signin-toast"),
    });

    if (isPending || !session) return;

    if (sessionStorage.getItem("signin-toast") === "1") {
      sessionStorage.removeItem("signin-toast");
      toast.success("সাইন ইন সফল হয়েছে!", { id: "signin-success" });
    }
  }, [session, isPending]);

  return null;
}