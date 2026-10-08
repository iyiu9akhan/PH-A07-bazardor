import React from "react";

const Footer = () => {
  return (
    <div className=" bg-componentColor border-t border-[#E1E8E1]">
      <div className="max-w-6xl mx-auto px-4 py-6 font-normal text-[14px] leading-5 text-primaryText flex justify-between items-center flex-col gap-3 md:gap-0 md:flex-row">
        <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
        <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
      </div>
    </div>
  );
};

export default Footer;
