import { Suspense } from "react";
import Image from "next/image";
import brandLogo from "@/assets/brand-logo.png";
import CurrentDate from "./CurrentDate";
import ScrollTopLink from "./ScrollTopLink";
import HeaderAuth from "./HeaderAuth";

const Header = () => {
  return (
    <div className="bg-componentColor">
      <div className="px-4 max-w-6xl mx-auto">
        <div className="navbar px-0 py-0">
          <div className="flex-1">
            <ScrollTopLink>
              <div className="flex items-center gap-2">
                <Image
                  src={brandLogo}
                  alt="Brand Logo"
                  width={40}
                  height={40}
                  priority
                />
                <div className="flex flex-col items-start text-primaryText">
                  <p className="font-bold text-[20px] leading-7 tracking-[-0.5px]">
                    বাজার দর
                  </p>
                  <Suspense fallback={<div className="h-4 w-24" />}>
                    <CurrentDate />
                  </Suspense>
                </div>
              </div>
            </ScrollTopLink>
          </div>

          <div className="flex-none">
            <Suspense fallback={<div className="h-8 w-24" />}>
              <HeaderAuth />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;