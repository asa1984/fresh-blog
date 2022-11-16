import { Handlers, PageProps } from "$fresh/server.ts";
import { Article } from "@/types/mod.ts";
import { getArticles } from "@/lib/article.ts";
import { PostCard } from "@/components/PostCard.tsx";
import { ContentMeta } from "@/components/ContentMeta.tsx";
import { Layout } from "@/components/Layout.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const articles = await getArticles();
    return await ctx.render(articles);
  },
};

export default function HomePage({ data }: PageProps<Article[]>) {
  const published = data.filter((article) => article.publish);
  published.sort((a, b) => b.date.getTime() - a.date.getTime());
  return (
    <>
      <ContentMeta />
      <Layout>
        <div className="mt-12 max-w-lg mx-auto">
          {published.map((v) => <PostCard {...v} />)}
        </div>
      </Layout>
    </>
  );
}
