import { IS_BROWSER } from "https://deno.land/x/fresh@1.1.2/runtime.ts";
import { useEffect, useState } from "preact/hooks";

type UseTheme = {
  isDark: boolean;
  toggle: () => void;
};

export const useTheme = (): UseTheme => {
  const initialState = (() => {
    if (!IS_BROWSER) return false;
    if (!("theme" in window.sessionStorage)) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return window.sessionStorage.getItem("theme") === "dark";
  })();
  const [isDark, setIsDark] = useState<boolean>(initialState);
  const toggle = () => {
    setIsDark((state) => !state);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      window.sessionStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.sessionStorage.setItem("theme", "light");
    }
  }, [isDark]);
  return { isDark, toggle };
};
