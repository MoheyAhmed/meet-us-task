"use client";
import { useState } from "react";
import { useClientAuth } from "../../hooks/useClientAuth";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Image from "next/image";
import Logo from "../../assets/main logo.png";
// import meetUs from "../../assets/meet us.png";
// import meetUs from "../../assets/meet us.png";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useClientAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  const isDisabled =
    !email || !password || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="">
          <div className="w-full md:w-[554px] text-center h-[415px]">
            <h1 className="font-[400] text-[56px] text-[#1A1A1E]">
              Welcome back
            </h1>
            <p className="font-[400] text-[18px] w-[381px] h-[56px] mx-auto text-[#62626B]">
              Step into our shopping metaverse for an unforgettable shopping
              experience
            </p>

            <form
              onSubmit={handleSubmit}
              className="w-[90%] md:w-[70%] mx-auto mt-8"
            >
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

              <Button type="submit" disabled={loading || isDisabled}>
                {loading ? "Logging in..." : "Login"}
              </Button>

              <p className="text-[14px] text-[#62626B] mt-6">
                Don't have an account? Sign up
              </p>
            </form>
          </div>
        </div>

        <div className=" min-h-screen">
          <div className="text-center w-full h-full">
            <Image
              src={Logo}
              alt="Logo"
              className="w-[100%] h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
