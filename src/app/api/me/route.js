import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const token = cookies().get("auth-token")?.value;
  if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const res = await fetch("https://api-yeshtery.dev.meetusvr.com/v1/user/info", {
    headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
  });

  if (!res.ok) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const data = await res.json();
  return NextResponse.json({ id: data.id, name: data.name });
}
