import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Article, getArticles } from "@/libs/article.ts";
import { PostCard } from "@/components/PostCard.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const articles = await getArticles();
    return ctx.render(articles);
  },
};

export default function Home({ data }: PageProps<Article[]>) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>

      <div className="max-w-3xl p-4 sm:p-8 m-auto text-[16px] leading-[1.75] bg-white lg:rounded-3xl">
        {data.map((v) => <PostCard {...v} />)}
      </div>
    </>
  );
}
