import { Head } from "$fresh/runtime.ts";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 NotFound</title>
      </Head>
      <div class="w-screen h-screen flex justify-center items-center ">
        <header class="text-center">
          <h1 class="text-5xl font-bold">404</h1>
          <h2 class="text-2xl mt-4">Not Found</h2>
          <a href="/" class="text-xl font-bold block mt-4 text-[#0856fd]">
            Top
          </a>
        </header>
      </div>
    </>
  );
}
