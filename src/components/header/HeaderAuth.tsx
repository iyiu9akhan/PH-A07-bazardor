import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import HeaderBtn from "./HeaderBtn";

const HeaderAuth = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  return <HeaderBtn user={session?.user ?? null} />;
};

export default HeaderAuth;