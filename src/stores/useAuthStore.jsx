import { create } from "zustand";

export const useAuthStore = create((set) => ({
  id: null,
  name: null,
  setUser: (user) => set({ id: user.id, name: user.name }),
  clearUser: () => set({ id: null, name: null }),
}));
