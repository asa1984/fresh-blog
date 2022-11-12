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
          {`body{font-family:'Segoe UI',sans-serif;`}
        </style>
      </Head>
      <Component />
    </>
  );
}
