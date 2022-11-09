import { Handlers, PageProps } from "$fresh/server.ts";
import { Markdown } from "@/features/markdown/mod.ts";
import { ContentMeta } from "@/features/content_meta/mod.ts";
import { Article, getArticle } from "@/libs/article.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const { slug } = ctx.params;
    const article = await getArticle(slug);
    return article ? ctx.render(article) : ctx.renderNotFound();
  },
};

export default function ArticlePage({ data }: PageProps<Article>) {
  return (
    <>
      <ContentMeta title={data.title} description={data.overview} />
      <div className="min-h-screen bg-gray-100 overflow-hidden">
        <article>
          <header>
          </header>
          <div className="max-w-3xl p-4 sm:p-8 mx-auto text-[16px] leading-[1.75] bg-white lg:rounded-xl">
            <Markdown markdown={data.content} />
          </div>
        </article>
      </div>
    </>
  );
}
