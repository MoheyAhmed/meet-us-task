"use client";
import LoginForm from "../components/auth/LoginForm.client";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center  bg-[#E9ECF2]">
      <div className="container mx-auto">
        <LoginForm />
      </div>
    </div>
  );
}
