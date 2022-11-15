import { OGP } from "@/types/mod.ts";
import { DOMParser } from "deno-dom/deno-dom-wasm.ts";

export async function getOGP(url: string) {
  const html = await (await fetch(url)).text();
  const dom = new DOMParser().parseFromString(html, "text/html");
  if (!dom) throw new Error("dom is not found");

  const metaElements = dom.getElementsByTagName("meta");
  const meta = metaElements
    .filter((elem) => elem.hasAttribute("property"))
    .reduce((previous: Record<string, string | null>, current) => {
      const property = current.getAttribute("property");
      const content = current.getAttribute("content");
      if (!property || !content) return previous;
      previous[property] = content;
      return previous;
    }, {});
  const ogp: OGP = {
    url: meta["og:url"] || url,
    title: meta["og:title"] || dom.title || "No Title",
    image: meta["og:image"] ?? "",
    domain: new URL(meta["og:url"] ?? url).hostname ?? "",
  };
  return ogp;
}
