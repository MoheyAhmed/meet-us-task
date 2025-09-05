import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  // امسح الكوكي
  cookies().set("auth-token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });

  // رجع redirect على صفحة الـ login (home page "/")
  return NextResponse.redirect(new URL("/", process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"));
}
