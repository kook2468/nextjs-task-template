import { useEffect } from "react";
import { useThemeStore } from "@/store/themeStore";
import { setHtmlThemeClass } from "../lib/dom";

export function useInitTheme() {
  //   const setTheme = useThemeStore((s) => s.setTheme);

  //   useEffect(() => {
  //     const saved =
  //       (localStorage.getItem("theme") as "light" | "dark") ?? "light";
  //     setTheme(saved); // 여기서 updateHtmlClass(theme) 실행됨
  //   }, [setTheme]);
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    setHtmlThemeClass(theme);
  }, [theme]);
}
