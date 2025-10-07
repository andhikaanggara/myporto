import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      isLoggedIn: false,

      toggleLogin: () => {
        const currentState = get().isLoggedIn;
        set({ isLoggedIn: !currentState });
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);
