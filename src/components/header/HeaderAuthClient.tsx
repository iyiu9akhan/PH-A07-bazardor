"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";
import { authClient } from "@/lib/auth-client";
import HeaderBtn from "./HeaderBtn";

const KEY = "header-user"; // "null" মানে লগআউট, না থাকলে অজানা

const subscribe = (cb: () => void) => {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
};
const getSnapshot = () => localStorage.getItem(KEY); // string, তাই স্থিতিশীল
const getServerSnapshot = () => undefined;

export default function HeaderAuth() {
  const { data, isPending } = authClient.useSession();
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const cachedUser = useMemo(() => {
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }, [raw]);

  // আসল সেশন এলে সেটাই সেভ করে রাখি
  useEffect(() => {
    if (isPending) return;
    const u = data?.user
      ? { name: data.user.name, email: data.user.email, image: data.user.image ?? null }
      : null;
    localStorage.setItem(KEY, JSON.stringify(u));
  }, [data, isPending]);

  // সার্ভার রেন্ডার / প্রথম ভিজিট: নিরপেক্ষ বক্স
  if (raw === undefined || (raw === null && isPending)) {
    return <div className="h-8 w-40" />;
  }

  const user = isPending ? cachedUser : (data?.user ?? null);
  return <HeaderBtn user={user} />;
}