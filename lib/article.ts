import { Article, articleSchema } from "@/types/mod.ts";
import { join } from "$std/path/mod.ts";
import { extract } from "$std/encoding/front_matter.ts";
import { z } from "zod";

export async function getArticle(slug: string): Promise<Article | null> {
  const path = join("./posts/articles/", `${slug}.md`);
  try {
    const text = await Deno.readTextFile(path);
    const { attrs, body } = extract(text);
    const article = {
      slug,
      title: attrs.title,
      overview: attrs.overview,
      date: new Date(attrs.date as string),
      publish: attrs.publish,
      content: body,
    };
    return articleSchema.parse(article);
  } catch (error) {
    if (
      !(error instanceof Deno.errors.NotFound || error instanceof z.ZodError)
    ) {
      throw error;
    }
    console.error(error);
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
