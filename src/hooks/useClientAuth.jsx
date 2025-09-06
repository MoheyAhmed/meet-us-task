"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../stores/useAuthStore";

export function useClientAuth() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);
  const clearUser = useAuthStore((s) => s.clearUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async ({ email, password }) => {
    setLoading(true);
    setError(null);
    try {
      // نعمل login
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Login failed");
      }

      // نجيب بيانات اليوزر بعد ما الكوكي تحفظ
      const me = await fetch("/api/me", { cache: "no-store" });
      if (!me.ok) throw new Error("Failed to fetch user");

      const user = await me.json();
      setUser(user);

      // روح ع الـ dashboard
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
    } finally {
      clearUser();
      router.push("/");
    }
  };

  return { login, logout, loading, error };
}
