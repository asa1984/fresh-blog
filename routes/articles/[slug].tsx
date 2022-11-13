import { Handlers, PageProps } from "$fresh/server.ts";
import { Markdown } from "@/features/markdown/mod.ts";
import { ContentMeta } from "@/components/ContentMeta.tsx";
import { Article } from "@/types/mod.ts";
import { getArticle } from "@/libs/article.ts";
import { Layout } from "@/components/Layout.tsx";
import * as Icons from "@/components/Icons.tsx";

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

      <Layout>
        <article className="max-w-2xl mx-auto">
          <header className="my-16">
            <h1 className="text-3xl font-bold mx-auto max-w-max">
              {data.title}
            </h1>
            <div className="mt-8 mx-auto max-w-max flex justify-center content-center">
              <Icons.Pen className="m-auto mr-2 text-gray-700" />
              <time
                className="block"
                dateTime={data.date.toJSON()}
              >
                {data.date.toLocaleDateString()}
              </time>
            </div>
            <p className="mt-2 mx-auto max-w-max">{data.overview}</p>
          </header>
          <Markdown markdown={data.content} />
        </article>
      </Layout>
    </>
  );
}
