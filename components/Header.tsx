import * as Icons from "./Icons.tsx";

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <a href="/" className="font-extrabold text-3xl text-blue-500 select-none">
        Tech-Blog
      </a>
      <nav className="flex gap-x-1 text-lg font-medium">
        <a href="/about" className="py-1 px-2 rounded-lg hover:bg-gray-100">
          About
        </a>
        <a
          href="https://github.com/ASA1984/fresh-blog"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="flex py-1 px-2 rounded-lg hover:bg-gray-100"
        >
          <Icons.GitHub className="m-auto" />
          <span className="hidden sm:inline">Source</span>
        </a>
      </nav>
    </header>
  );
};
