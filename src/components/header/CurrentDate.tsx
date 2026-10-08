import { cacheLife } from "next/cache";

const CurrentDate = async () => {
  "use cache";
  cacheLife("hours");

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });

  return (
    <p className="font-normal text-[12px] leading-4 min-h-4">{date}</p>
  );
};

export default CurrentDate;