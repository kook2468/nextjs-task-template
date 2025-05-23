/* 돔 조작 */
export function setHtmlThemeClass(theme: "light" | "dark") {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
}
