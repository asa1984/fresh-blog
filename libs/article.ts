import { join } from "$std/path/mod.ts";
import { extract } from "$std/encoding/front_matter.ts";

export interface Article {
  slug: string;
  title: string;
  overview: string;
  publish: boolean;
  publishedAt: string;
  content: string;
}

// export interface Diary {
//   slug: string;
//   title: string;
//   publish: string;
//   date: string;
//   content: string;
// }

// deno-lint-ignore no-explicit-any
const isValidArticle = (arg: any): arg is Article => {
  const { slug, title, overview, publish, publishedAt, content } =
    arg as Article;
  return typeof slug === "string" &&
    typeof title === "string" &&
    typeof overview === "string" &&
    typeof publish === "boolean" &&
    typeof publishedAt === "string" &&
    typeof content === "string";
};

export async function getArticle(slug: string): Promise<Article | null> {
  const path = join("./posts/articles/", `${slug}.md`);
  try {
    const text = await Deno.readTextFile(path);
    const { attrs, body } = extract(text);
    const article = {
      slug,
      title: attrs.title,
      overview: attrs.overview,
      publish: attrs.publish,
      publishedAt: attrs.published_at,
      content: body,
    };
    return isValidArticle(article) ? article : null;
  } catch (error) {
    if (!(error instanceof Deno.errors.NotFound)) {
      throw error;
    }
    return null;
  }
}

export async function getArticles(): Promise<Article[]> {
  const fileNames: string[] = [];
  for await (const entry of Deno.readDir("./posts/articles")) {
    if (entry.isFile) {
      fileNames.push(entry.name.replace(".md", ""));
    }
  }

  const resp = await Promise.all(
    fileNames.map((fileName) => getArticle(fileName)),
  );
  const articles = resp.filter((v) => v !== null);
  return articles as Article[];
}
