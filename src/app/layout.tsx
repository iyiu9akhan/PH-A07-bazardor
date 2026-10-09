import Category from "@/components/category/Category";
import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { Quicksand, Hind_Siliguri } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import MarqueeText from "@/components/marquee/MarqueeText";
import Footer from "@/components/footer/Footer";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${hindSiliguri.variable} ${quicksand.variable} antialiased`}
    >
      <body className="min-h-screen bg-base-100 relative flex flex-col">
        <div className="fixed top-0 left-0 right-0 z-50 bg-componentColor ">
          <Header />
          <Category />
        </div>
        <div className="pt-28.75 flex flex-col flex-1">
          <MarqueeText />
          <div className="flex-1 bg-[#f0f5f0]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
