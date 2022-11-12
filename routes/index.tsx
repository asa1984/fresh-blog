import { Handlers, PageProps } from "$fresh/server.ts";
import { Article } from "@/types/mod.ts";
import { getArticles } from "@/libs/article.ts";
import { PostCard } from "@/components/PostCard.tsx";
import { Header } from "@/components/Header.tsx";
import { ContentMeta } from "@/components/ContentMeta.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const articles = await getArticles();
    articles.sort((a, b) => b.date.getTime() - a.date.getTime());
    return ctx.render(articles);
  },
};

export default function Home({ data }: PageProps<Article[]>) {
  return (
    <>
      <ContentMeta />
      <div className="max-w-2xl p-4 sm:p-8 m-auto text-[16px] leading-[1.75] bg-white">
        <Header />
        {data.map((v) => <PostCard {...v} />)}
      </div>
    </>
  );
}
