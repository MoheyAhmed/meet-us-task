"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    // ابعت للـ API
    await fetch("/api/logout", { method: "POST" });

    // بعد ما الكوكي تتمسح → redirect للـ login
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
}
