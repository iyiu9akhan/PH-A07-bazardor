import Category from "@/components/category/Category";
import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { Quicksand, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import MarqueeText from "@/components/marquee/MarqueeText";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
import AuthToast from "@/app/(auth)/AuthToast";

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
      suppressHydrationWarning
      className={`${hindSiliguri.variable} ${quicksand.variable} antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var u=JSON.parse(localStorage.getItem("header-user")||"null");var css=u? ".auth-out{display:none!important}.hu-name::after{content:"+JSON.stringify((u.name||"").split(" ")[0])+"}"+(u.image?".hu-avatar{background-image:url("+JSON.stringify(u.image)+");background-size:cover;background-position:center}":""): ".auth-in{display:none!important}";var s=document.createElement("style");s.textContent=css;document.head.appendChild(s);}catch(e){}`,
          }}
        />
      </head>
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
        <Toaster position="top-center" />
        <AuthToast />
      </body>
    </html>
  );
}
