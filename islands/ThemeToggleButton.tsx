import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect, useState } from "preact/hooks";
import { lazy, Suspense } from "preact/compat";
import IconSun from "tabler-icons-tsx/sun.tsx";
import IconMoon from "tabler-icons-tsx/moon.tsx";

const useTheme = () => {
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

export default function ThemeToggleButton(props: { className?: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const { isDark, toggle } = useTheme();
  useEffect(() => {
    setIsMounted(() => true);
  }, []);

  return (
    <div
      className={`delay-[50ms] ${isMounted ? "visible" : "invisible"}`}
    >
      <button
        onClick={toggle}
        className={`m-auto p-1.5 rounded-md transition 
        ${
          isDark
            ? "bg-purple-500 hover:bg-purple-600"
            : "bg-red-400 hover:bg-red-500"
        }
        ${props.className}`}
      >
        {isDark ? <IconMoon /> : <IconSun />}
      </button>
    </div>
  );
}

// ${isDark ? "bg-purple-500" : "bg-red-500"}
