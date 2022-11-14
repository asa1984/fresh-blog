import { OGP } from "@/types/mod.ts";
import { DOMParser } from "deno-dom/deno-dom-wasm.ts";

export async function getOGP(url: string): Promise<OGP> {
  const html = await (await fetch(url)).text();
  const dom = new DOMParser().parseFromString(html, "text/html");
  if (!dom) throw new Error("dom is not found");

  const metaElements = dom.getElementsByTagName("meta");
  const ogp = metaElements
    .filter((elem) => elem.hasAttribute("property"))
    .reduce((previous: Record<string, string | null>, current) => {
      const property = current.getAttribute("property");
      const content = current.getAttribute("content");
      if (!property || !content) return previous;
      previous[property] = content;
      return previous;
    }, {});

  return {
    url: ogp["og:url"] || url,
    title: ogp["og:title"] || dom.title || ogp["og:url"] || url,
    image: ogp["og:image"],
    domain: new URL(ogp["og:url"] ?? url).hostname,
  };
}
