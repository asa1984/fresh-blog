import { Handlers, PageProps } from "$fresh/server.ts";
import { Markdown } from "@/features/markdown/mod.ts";
import { ContentMeta } from "@/components/ContentMeta.tsx";
import { Article } from "@/types/mod.ts";
import { getArticle } from "@/libs/article.ts";

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
      <div className="min-h-screen overflow-hidden bg-gray-100">
        <article className="max-w-4xl mx-auto text-[16px] leading-[1.75]">
          <header className="my-16 mx-auto px-4">
            <h1 className="text-3xl font-bold mx-auto max-w-max">
              {data.title}
            </h1>
            <div className="mt-8 text-center">
              <span className="font-medium mr-2">
                {"Published"}
              </span>
              <time
                className="mt-2 text-base"
                dateTime={data.date.toJSON()}
              >
                {data.date.toLocaleDateString()}
              </time>
            </div>
            <p className="mt-2 mx-auto max-w-max">{data.overview}</p>
          </header>
          <div className="p-4 sm:p-10 md:rounded-2xl bg-white">
            <Markdown markdown={data.content} />
          </div>
        </article>
      </div>
    </>
  );
}
