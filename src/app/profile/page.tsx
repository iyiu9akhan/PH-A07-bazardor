import { Suspense } from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import ProfileView from "@/components/profile/ProfileView";

const ProfileContent = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  const user = session?.user ? {
    name: session.user.name,
    email: session.user.email,
    image: session.user.image ?? null
  } : { name: "", email: "", image: null };

  return <ProfileView user={user} />;
};

const Profile = () => {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <ProfileContent />
    </Suspense>
  );
};

export default Profile;