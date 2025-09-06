import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "../components/auth/LoginForm.client";

export default function Page() {
  const token = cookies().get("auth-token")?.value;

  if (token) {
    return redirect("/dashboard");
  }

  return (
    <div className="relative min-h-screen md:max-h-screen overflow-hidden bg-[#E9ECF2]">
      {/* background shapes */}
      <div className="absolute top-0 left-[30%] w-[800px] h-[100px] bg-[#E477F6] blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B0D2E5] rounded-full blur-[800px] opacity-0"></div>
      <div className="absolute -bottom-10 -right-50 w-[600px] h-[200px] bg-[#9E77F6] blur-[90px]"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E477F6] rounded-full blur-[400px] opacity-60"></div>

      <div className="flex items-center min-h-screen bg-[#E9ECF2] rounded-3xl border-2 border-[#fff] mx-auto pt-7 lg:pt-0">
        <div className="container max-w-screen-xl mx-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
