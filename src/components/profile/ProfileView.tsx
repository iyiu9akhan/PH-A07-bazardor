"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import profilePic from "@/assets/profilePic.jpg";
import { authClient } from "@/lib/auth-client";

type ProfileUser = { name: string; email: string; image: string | null };

const ProfileView = ({ user }: { user: ProfileUser }) => {
  const router = useRouter();
  const [name, setName] = useState(user.name);
  const [loading, setLoading] = useState(false);

  const trimmed = name.trim();
  const unchanged = trimmed === user.name;

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!trimmed || unchanged) return;

    setLoading(true);
    const { error } = await authClient.updateUser({ name: trimmed });
    setLoading(false);

    if (error) {
      toast.error(error.message || "নাম আপডেট করা যায়নি, আবার চেষ্টা করুন");
      return;
    }

    toast.success("নাম আপডেট হয়েছে!");
    router.refresh(); 
  };

  return (
    <div className="flex items-center justify-center mt-10 mb-20">
      <div className="w-full max-w-3xl px-4 mx-auto">
        <div className="mb-6">
          <h1 className="font-bold text-[24px] leading-8 text-primaryText">
            আমার প্রোফাইল
          </h1>
          <p className="font-normal text-[14px] leading-5 text-primaryText/70">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        <div className="bg-componentColor rounded-2xl p-5 flex flex-col md:flex-row items-center md:justify-between gap-4 border border-[#E1E8E1] mb-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <Image
              src={user.image || profilePic}
              alt={user.name}
              width={66}
              height={66}
              className="w-16.5 h-16.5 rounded-xl object-cover bg-gray-100"
              priority
            />
            <div>
              <p className="font-semibold text-[18px] leading-7 text-primaryText">
                {user.name}
              </p>
              <p className="font-normal text-[14px] leading-5 text-primaryText/70">
                {user.email}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSignOut}
            className="w-full md:w-auto text-center font-semibold text-[12px] leading-4 text-[#D03739] hover:text-secondaryText px-3 py-2.5 border border-[#D03739] rounded-lg hover:bg-[#D03739] transition cursor-pointer"
          >
            ↩ সাইন আউট
          </button>
        </div>

        {/* Info card */}
        <div className="bg-componentColor rounded-2xl border border-[#E1E8E1] p-5">
          <p className="font-semibold text-[16px] leading-6 text-primaryText mb-6">
            তথ্য
          </p>
          <form className="px-5 pb-4" onSubmit={handleUpdate}>
            <label
              htmlFor="name"
              className="block font-medium text-[12px] leading-4 text-primaryText mb-1"
            >
              নাম
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full h-8.5 px-3 mb-3 rounded-lg border border-[#E1E8E1] bg-transparent outline-none focus:border-[#048A3F] transition"
            />
            <button
              type="submit"
              disabled={loading || unchanged || !trimmed}
              className="w-full h-8.5 rounded-lg bg-[#048A3F] text-white font-semibold text-[12px] shadow-md hover:opacity-90 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "আপডেট হচ্ছে..." : "আপডেট"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;