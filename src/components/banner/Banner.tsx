import React from "react";
import CurrentDate from "@/components/header/CurrentDate";
import Link from "next/link";
import Image from "next/image";
import bannerImg from "@/assets/bannerImg.png";
const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 bg-componentColor py-3 mt-7.5 rounded-3xl flex items-start justify-between mb-10">
      <div>
        <div className="text-brand font-medium text-[14px] leading-5 px-3 py-1 rounded-[14px] bg-brand/10 inline-block mb-2">
          <CurrentDate />
        </div>
        <h1 className="font-bold text-[36px] leading-11.25 text-primaryText mb-5">
          আজকের বাজারের দাম এক নজরে
        </h1>
        <p className="font-normal text-[16px] leading-6 text-primaryText/70 mb-7 max-w-xl">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <Link
          href="/"
          style={{
            boxShadow:
              "0px 4px 3px -2px rgba(5, 137, 62, 0.5), 0px 3px 2px -2px rgba(5, 137, 62, 0.5)",
          }}
          className="font-semibold text-[14px] leading-5.25 text-secondaryText bg-brand rounded-lg px-5.75 py-2.5 border border-[#047F39] "
        >
          সব পণ্য দেখুন
        </Link>
      </div>
      <Image src={bannerImg} alt="banner img" />
    </div>
  );
};

export default Banner;
