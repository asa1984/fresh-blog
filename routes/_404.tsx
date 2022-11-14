import { Head } from "$fresh/runtime.ts";
import { Layout } from "@/components/Layout.tsx";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 NotFound</title>
        <script src="/theme.js"></script>
      </Head>
      <Layout>
        <div class="mt-32 flex justify-center items-center">
          <header class="text-center">
            <h1 class="text-5xl font-bold">Not Found</h1>
            <a
              href="/"
              class="block max-w-max mt-8 mx-auto py-2 px-4 rounded-xl text-xl font-medium transition bg-blue-500 hover:bg-blue-600 text-white"
            >
              Retun To Home
            </a>
          </header>
        </div>
      </Layout>
    </>
  );
}
