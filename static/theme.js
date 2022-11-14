// フラッシュ防止の為、bodyタグの読み込み前にダークテーマ適用
(() => {
  if (
    !("theme" in localStorage) &&
    (window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    return;
  }
  if (sessionStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }
})();
