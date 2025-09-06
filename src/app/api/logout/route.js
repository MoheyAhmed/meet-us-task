import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  // امسح الكوكي
  cookies().set("auth-token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });

  // رجّع success JSON (من غير redirect)
  return NextResponse.json({ ok: true });
}
