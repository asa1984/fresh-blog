import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <style>
          {`html{overflow-y: scroll;}body{font-family:'Segoe UI',sans-serif;}`}
        </style>
        <script src="/theme.js"></script>
      </Head>
      <Component />
    </>
  );
}
