import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <style>
          {`body{font-family:meiryo, 'Noto Sans JP', meiryo, sans-serif;}body::-webkit-scrollbar{width: 16px;}body::-webkit-scrollbar-thumb{min-height: 16vh;border-radius: 8px;border: 4px solid transparent;background-clip: content-box;background-color: #bbbbbbcc;}`}
        </style>
      </Head>
      {
        /* <header className="flex justify-between">
        <h1>Blog</h1>
        <div className="flex">
          <div>Article</div>
          <div>Dialog</div>
        </div>
      </header> */
      }
      <Component />
    </>
  );
}
