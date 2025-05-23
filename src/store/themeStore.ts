import { setHtmlThemeClass } from "@/shared/lib/dom";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

/* create + persist(localStorage 저장) */
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light", // default 값
      setTheme: (theme) => {
        set({ theme });
        setHtmlThemeClass(theme); // html.classList 조작
      },
      toggleTheme: () => {
        set((state) => {
          const next = state.theme === "light" ? "dark" : "light";
          setHtmlThemeClass(next);
          return { theme: next };
        });
      },
    }),
    {
      name: "theme", // localStorage 키
    }
  )
);

/* 순수 create 만으로 구현
export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  setTheme: (theme) => {
    set({ theme });
    localStorage.setItem("theme", theme);
    setHtmlThemeClass(theme);
  },
  toggleTheme: () => {
    set((state) => {
      const next = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      setHtmlThemeClass(next);
      return { theme: next };
    });
  },
}));
*/
