import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  username: string;
  login: (username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  //초기값 지정
  isLoggedIn: false,
  username: "",
  login: (username) => set({ isLoggedIn: true, username }),
  logout: () => set({ isLoggedIn: false, username: "" }),
}));
