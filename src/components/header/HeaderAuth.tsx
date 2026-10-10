"use client";

import { authClient } from "@/lib/auth-client";
import HeaderBtn from "./HeaderBtn";

export default function HeaderAuth() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <div className="h-9 w-24 animate-pulse rounded-lg bg-gray-100/10" />;
  }

  return <HeaderBtn user={session?.user ?? null} />;
}