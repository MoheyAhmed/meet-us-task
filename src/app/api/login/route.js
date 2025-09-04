import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const apiRes = await fetch("https://api-yeshtery.dev.meetusvr.com/v1/yeshtery/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, isEmployee: true }),
    });

    if (!apiRes.ok) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const data = await apiRes.json();
    const token = data?.token;
    if (!token) return NextResponse.json({ message: "No token" }, { status: 500 });

    cookies().set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1 hour
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
