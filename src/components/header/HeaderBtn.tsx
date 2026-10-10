"use client";
import { useEffect, useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import profileImage from "@/assets/profilePic.jpg";

type HeaderUser = { name: string; email: string; image?: string | null } | null;

const HeaderBtn = ({ user }: { user: HeaderUser }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await authClient.signOut();
    setOpen(false);
    router.push("/");
    router.refresh();
  };

  return (
    <div>
      {user ? (
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Image
              src={user.image || profileImage}
              alt={user.name || "profile image"}
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg object-cover"
            />
            <p className="capitalize font-semibold text-[14px] leading-5 text-primaryText">
              {user.name?.split(" ")[0]}
            </p>
            <span
              className={`text-[8px] text-primaryText/60 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {open && (
            <div className="absolute right-0 top-full mt-3 w-56 rounded-xl border border-[#E1E8E1] bg-componentColor p-4 shadow-lg z-50">
              <p className="font-semibold text-[14px] leading-5 text-primaryText">
                {user.name}
              </p>
              <p className="mb-3 font-normal text-[12px] leading-4 text-primaryText/70 break-all">
                {user.email}
              </p>

              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-1.5 font-medium text-[14px] leading-5 text-primaryText hover:text-brand transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
                </svg>
                আমার প্রোফাইল
              </Link>

              <button
                type="button"
                onClick={handleSignOut}
                className="mt-1 flex w-full items-center gap-2 py-1.5 font-medium text-[14px] leading-5 text-[#D03739] cursor-pointer hover:opacity-80 transition-opacity"
              >
                ↩ সাইন আউট
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-7.5">
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
      )}
    </div>
  );
};

export default HeaderBtn;
