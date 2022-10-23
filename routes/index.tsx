import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Markdown } from "@/features/markdown/mod.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const url = new URL("../_post/example.md", import.meta.url);
    const md = await Deno.readTextFile(url);
    return ctx.render({ content: md });
  },
};

export default function Home({ data }: PageProps<{ content: string }>) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      {/* <article class="bg-gray-100 pb-16"> */}
      <div class="max-w-3xl py-12 px-[4vw] m-auto text-[16px] leading-[1.75] bg-white rounded-2xl">
        <Markdown markdown={data.content} />
      </div>
      {/* </article> */}
    </>
  );
}
