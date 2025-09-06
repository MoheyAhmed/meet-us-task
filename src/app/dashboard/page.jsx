import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/auth/LogoutButton";

export default async function DashboardPage() {
  const token = cookies().get("auth-token")?.value;
  if (!token) return redirect("/");

  // ====== robust origin resolution ======
  // 1) APP_URL (you may set in .env.local / Vercel env)
  // 2) VERCEL_URL (Vercel provides this like "your-app.vercel.app")
  // 3) fallback to localhost
  const origin =
    process.env.APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    "http://localhost:3000";

  // use URL to produce absolute URL for Node fetch
  const res = await fetch(new URL("/api/me", origin).toString(), {
    headers: { Cookie: `auth-token=${token}` },
    cache: "no-store",
  });

  if (!res.ok) return redirect("/");

  const user = await res.json();

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#E9ECF2]">
      <div className="border border-[#fff] bg-white p-12 rounded-4xl shadow-lg">
        <h1 className="text-2xl mb-4">
          Welcome, <span className="font-bold text-3xl text-red-500">{user.name}</span>
        </h1>

        <p className="mb-4 text-2xl">
          Your Email: <span className="font-bold text-blue-600">{user.email}</span>
        </p>
        <p className="mb-4 text-2xl">
          Your ID: <span className="font-bold text-blue-600">{user.id}</span>
        </p>
        <p className="mb-4 text-2xl">
          Organization ID: <span className="font-bold text-blue-600">{user.organization_id}</span>
        </p>
        <p className="mb-4 text-2xl">
          Status: <span className="font-bold text-blue-600">{user.status}</span>
        </p>

        <div className="text-center mt-6">
          <LogoutButton />
        </div>
      </div>
    </section>
  );
}
