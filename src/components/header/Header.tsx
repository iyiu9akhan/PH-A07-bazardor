import Image from "next/image";
import Link from "next/link";
import brandLogo from "@/assets/brand-logo.png";
import profileImage from "@/assets/profileImg.png";
import CurrentDate from "./CurrentDate";

const Header = () => {
  return (
    <div className="bg-componentColor" id="/">
      <div className="px-4 max-w-6xl mx-auto">
        <div className="navbar px-0 py-0">
          <div className="flex-1">
            <Link
              className="hover:bg-transparent border-0 shadow-none px-0"
              href="/"
              scroll={true}
            >
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
            </Link>
          </div>
          <div className="flex-none">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image src={profileImage} alt="profile image" />
                <p className="capitalize font-semibold text-[14px] leading-5 text-primaryText">
                  rezwan
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
