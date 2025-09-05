"use client";
import { useState } from "react";
import { useClientAuth } from "../../hooks/useClientAuth";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Image from "next/image";
import Logo from "../../assets/main logo.png";
import emailIcon from "../../assets/sms.svg";
import lockIcon from "../../assets/lock.svg";
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
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-12">
        <div>
          <div className="w-full lg:w-[554px] text-center ">
            <h1 className="font-[400] text-[56px] text-[#1A1A1E]">
              Welcome back
            </h1>
            <p className="font-[400] text-[18px] lg:w-[381px]  mx-auto text-[#62626B]">
              Step into our shopping metaverse for an unforgettable shopping
              experience
            </p>

            <form
              onSubmit={handleSubmit}
              className="relative w-[90%] lg:w-[70%] mx-auto mt-8"
            >
              <div className="relative mb-3">
                <div className="absolute inset-y-0 start-0 -top-3 flex items-center ps-3.5">
                  <Image
                    src={emailIcon}
                    alt="email"
                    width={20}
                    height={20}
                    className="mr-3 opacity-70"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 start-0 -top-3 flex items-center ps-3.5 ">
                  <Image
                    src={lockIcon}
                    alt="email"
                    width={20}
                    height={20}
                    className="mr-3 opacity-70"
                  />
                </div>
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

        <div>
          <div className="text-center w-full h-full">
            <Image
              src={Logo}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
