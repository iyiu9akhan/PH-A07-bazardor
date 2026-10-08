"use client";

import Link from "next/link";
import React from "react";

const ScrollTopLink = ({ children }: { children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      className="hover:bg-transparent border-0 shadow-none px-0"
    >
      {children}
    </Link>
  );
};

export default ScrollTopLink;
