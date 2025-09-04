import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const token = cookies().get("auth-token")?.value;

  // لو مفيش توكن → رجع للـ login
  if (!token) return redirect("/");

  // نجيب بيانات المستخدم
  const res = await fetch("https://api-yeshtery.dev.meetusvr.com/v1/user/info", {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) return redirect("/");

  const user = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Welcome, {user.name}</h1>
      <p className="mb-4">ID: {user.id}</p>

      {/* Logout form */}
      <form action="/api/logout" method="post">
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
          Logout
        </button>
      </form>
    </div>
  );
}
