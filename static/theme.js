// HACK: フラッシュ防止の為、bodyタグの読み込み前にダークテーマ適用
(() => {
  const storage = localStorage;
  if (
    !("theme" in storage) &&
    (window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    return;
  }
  if (storage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }
})();
