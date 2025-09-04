"use client";
import LoginForm from "../components/auth/LoginForm.client";

export default function Page() {
  return (
    <div className="md:max-h-screen md:overflow-hidden flex items-center bg-gradient-to-r from-[#E9ECF2] via-[#9E77F6] via-[#E477F6] to-[#E9ECF2] min-h-screen">
      <div className="container mx-auto">
        <LoginForm />
      </div>
    </div>
  );
}
