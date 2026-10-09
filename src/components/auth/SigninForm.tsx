"use client";

import Link from "next/link";
import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-[#E1E8E1] px-4 py-2.5 text-[14px] leading-5 text-primaryText placeholder:text-primaryText/60 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

const labelClass =
  "mb-1.5 block text-[14px] font-medium leading-5 text-primaryText";

export default function SigninForm() {

  return (
    <form  className="flex flex-col gap-4">
      <div>
        <label htmlFor="email" className={labelClass}>
          ইমেইল
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          // value={form.email}
          // onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="password" className={labelClass}>
          পাসওয়ার্ড
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={8}
          placeholder="কমপক্ষে ৮ অক্ষর"
          // value={form.password}
          // onChange={handleChange}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        style={{
          boxShadow:
            "0px 4px 3px -2px rgba(5, 137, 62, 0.5), 0px 3px 2px -2px rgba(5, 137, 62, 0.5)",
        }}
        className="w-full cursor-pointer rounded-lg border border-[#047F39] bg-brand px-5 py-2.5 text-[14px] font-semibold leading-5 text-secondaryText transition-opacity hover:opacity-90"
      >
        সাইন ইন
      </button>

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-[#E1E8E1]" />
        <span className="text-[13px] leading-5 text-primaryText/70">অথবা</span>
        <div className="h-px flex-1 bg-[#E1E8E1]" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#E1E8E1] bg-componentColor px-3 py-2.5 text-[13px] font-semibold leading-5 text-primaryText transition-colors hover:bg-[#E0E5E0]"
        >
          <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            />
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            />
          </svg>
          Google দিয়ে চালিয়ে যান
        </button>

        <button
          type="button"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#E1E8E1] bg-componentColor px-3 py-2.5 text-[13px] font-semibold leading-5 text-primaryText transition-colors hover:bg-[#E0E5E0]"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
          GitHub দিয়ে চালিয়ে যান
        </button>
      </div>

      <p className="text-center text-[14px] leading-5 text-primaryText">
        অ্যাকাউন্ট নেই?{" "}
        <Link href="/signup" className="font-medium text-brand hover:underline">
          সাইন আপ করুন
        </Link>
      </p>
    </form>
  );
}