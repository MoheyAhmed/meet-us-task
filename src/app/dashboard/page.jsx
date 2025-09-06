import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/auth/LogoutButton";

export default async function DashboardPage() {
  const token = cookies().get("auth-token")?.value;
  if (!token) return redirect("/");

  const res = await fetch(`${process.env.APP_URL}/api/me`, {
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
        <p className="mb-4 text-2xl">Your Email: <span className="font-bold text-blue-600">{user.email}</span></p>
        <p className="mb-4 text-2xl">Your ID: <span className="font-bold text-blue-600">{user.id}</span></p>
        <p className="mb-4 text-2xl">Organization ID: <span className="font-bold text-blue-600">{user.organization_id}</span></p>
        <p className="mb-4 text-2xl">Status: <span className="font-bold text-blue-600">{user.status}</span></p>

        <div className="text-center mt-6">
          <LogoutButton />
        </div>
      </div>
    </section>
  );
}
