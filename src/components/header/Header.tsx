import Image from "next/image";
import Link from "next/link";
import brandLogo from "@/assets/brand-logo.png";
import CurrentDate from "./CurrentDate";
import ScrollTopLink from "./ScrollTopLink";

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
                  <CurrentDate />
                </div>
              </div>
            </ScrollTopLink>
          </div>

          <div className="flex-none">
            <div className="flex items-center gap-7.5">
              {/* <Image src={profileImage} alt="profile image" />
                <p className="capitalize font-semibold text-[14px] leading-5 text-primaryText">
                  rezwan
                </p> */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
