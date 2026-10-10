"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import HeaderBtn from "./HeaderBtn";

const KEY = "header-user";

const subscribe = (cb: () => void) => {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
};

export default function HeaderAuth() {
  const { data, isPending } = authClient.useSession();

  const raw = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(KEY),
    () => "server",
  );

  const cachedUser = useMemo(() => {
    try {
      return raw && raw !== "server" ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, [raw]);

  useEffect(() => {
    if (isPending) return;
    const u = data?.user
      ? {
          name: data.user.name,
          email: data.user.email,
          image: data.user.image ?? null,
        }
      : null;
    localStorage.setItem(KEY, JSON.stringify(u));
  }, [data, isPending]);

  if (raw === "server") {
    return (
      <>
        <div className="auth-in flex items-center gap-2">
          <div className="hu-avatar w-8 h-8 rounded-lg bg-gray-200" />
          <p className="hu-name capitalize font-semibold text-[14px] leading-5 text-primaryText" />
          <span className="text-[8px] text-primaryText/60">▼</span>
        </div>
        <div className="auth-out flex items-center gap-7.5">
          <Link
            href="/signin"
            className="font-semibold text-[14px] leading-5.25 text-primaryText"
          >
            সাইন ইন
          </Link>
          <Link
            href="/signup"
            style={{
              boxShadow:
                "0px 4px 3px -2px rgba(5, 137, 62, 0.5), 0px 3px 2px -2px rgba(5, 137, 62, 0.5)",
            }}
            className="font-semibold text-[14px] leading-5.25 text-secondaryText px-[18.27px] py-[9.8px] rounded-lg bg-brand"
          >
            সাইন আপ
          </Link>
        </div>
      </>
    );
  }

  const user = isPending ? cachedUser : (data?.user ?? null);
  return <HeaderBtn user={user} />;
}