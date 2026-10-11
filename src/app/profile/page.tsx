import { Suspense } from "react";
import { headers } from "next/headers";
import { connection } from "next/server";
import { auth } from "@/lib/auth";
import ProfileView from "@/components/profile/ProfileView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "আমার প্রোফাইল | বাজার দর",
  description: "আপনার অ্যাকাউন্টের তথ্য দেখুন ও আপডেট করুন।",
};

const ProfileContent = async () => {
  await connection();

  const session = await auth.api.getSession({ headers: await headers() });

  const user = session?.user
    ? {
        name: session.user.name,
        email: session.user.email,
        image: session.user.image ?? null,
      }
    : { name: "", email: "", image: null };

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