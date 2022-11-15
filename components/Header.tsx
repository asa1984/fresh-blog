import IconBrandGithub from "tabler-icons-tsx/brand-github.tsx";
import ThemeToggleButton from "@/islands/ThemeToggleButton.tsx";

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <a
        href="/"
        className="font-extrabold text-3xl text-blue-500 select-none"
      >
        TechniCasu
      </a>
      <nav className="flex sm:gap-x-1 text-lg font-medium">
        <a
          href="/about"
          className="py-1 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          About
        </a>
        <a
          href="https://github.com/ASA1984/fresh-blog"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="flex py-1 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <IconBrandGithub className="w-5 h-5 m-auto sm:mr-0.5" />
          <span className="hidden sm:inline">Source</span>
        </a>
        <ThemeToggleButton className="ml-2" />
      </nav>
    </header>
  );
};
