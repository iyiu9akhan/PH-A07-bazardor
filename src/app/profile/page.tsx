import { Suspense } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import ProfileView from "@/components/profile/ProfileView";

const ProfileContent = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) redirect("/signin");

  const { name, email, image } = session.user;

  return <ProfileView user={{ name, email, image: image ?? null }} />;
};

const Profile = () => {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <ProfileContent />
    </Suspense>
  );
};

export default Profile;