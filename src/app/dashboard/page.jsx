import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const token = cookies().get("auth-token")?.value;

  // لو مفيش توكن → رجع للـ login
  if (!token) return redirect("/");

  // نجيب بيانات المستخدم من API الداخلية
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "https://meet-us-task-gamma.vercel.app/" || "http://localhost:3000" }/api/me`, {
    headers: { Cookie: `auth-token=${token}` },
    cache: "no-store",
  });

  if (!res.ok) return redirect("/");

  const user = await res.json();

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#E9ECF2] ">
      <div className="border border-[#fff] bg-white p-12 rounded-4xl shadow-lg">
        <h1 className="text-2xl mb-4">
          Welcome, <span className="font-bold text-3xl text-red-500">{user.name}</span>
        </h1>
        <p className="mb-4 text-2xl">
          Your Email is: <span className="font-bold text-blue-600">{user.email}</span>
        </p>
        <p className="mb-4 text-2xl">
          Your ID is: <span className="font-bold text-blue-600">{user.id}</span>
        </p>
        <p className="mb-4 text-2xl">
          Your Organization Id is:{" "}
          <span className="font-bold text-blue-600">{user.organization_id}</span>
        </p>
        <p className="mb-4 text-2xl">
          Your Status is: <span className="font-bold text-blue-600">{user.status}</span>
        </p>

        {/* Logout form */}
        <form action="/api/logout" method="post" className="text-center mt-6">
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
            Logout
          </button>
        </form>
      </div>
    </section>
  );
}
