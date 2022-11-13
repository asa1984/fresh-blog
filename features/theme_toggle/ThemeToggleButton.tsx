import { useTheme } from "./useTheme.ts";

export const ThemeToggleButton = () => {
  const { isDark, toggle } = useTheme();
  return <button onClick={toggle}>{isDark ? "dark" : "light"}</button>;
};
