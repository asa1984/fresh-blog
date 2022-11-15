import { JSX } from "preact";
import { Header } from "./Header.tsx";

export const Layout = (props: { children: JSX.Element }) => {
  return (
    <div className="bg-white dark:text-white dark:bg-gray-900 transition text-[16px] leading-[1.75]">
      <div className="flex flex-col justify-between max-w-3xl min-h-screen mx-auto p-4">
        <Header />
        <main className="flex-grow">
          {props.children}
        </main>
        <footer className="mt-16 text-center font-medium text-gray-500 dark:text-gray-400">
          © 2022 A.S.
        </footer>
      </div>
    </div>
  );
};
