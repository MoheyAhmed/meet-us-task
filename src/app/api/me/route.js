import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const token = cookies().get("auth-token")?.value;
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const res = await fetch("https://api-yeshtery.dev.meetusvr.com/v1/user/info", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const data = await res.json();

    return NextResponse.json({
      id: data.id,
      name: data.name,
      email: data.email,
      organization_id: data.organization_id,
      status: data.status,
    });
  } catch {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
