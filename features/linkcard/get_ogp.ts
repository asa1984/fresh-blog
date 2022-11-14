import { OGP } from "./types.ts";
import { DOMParser } from "deno-dom/deno-dom-wasm.ts";

const isOGP = (arg: unknown): arg is OGP => {
  const { url, title, image, domain } = arg as OGP;
  return typeof url === "string" && typeof title === "string" &&
    typeof image === "string" && typeof domain === "string";
};

async function fetchOgp(url: string) {
  const html = await (await fetch(url)).text();
  const dom = new DOMParser().parseFromString(html, "text/html");
  if (!dom) throw new Error("dom is not dound");

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
    title: ogp["og:title"] || dom.title || "No Title",
    image: ogp["og:image"] ?? "",
    domain: new URL(ogp["og:url"]!).hostname ?? "",
  };
}

export async function getOgp(url: string): Promise<OGP> {
  const decoded = decodeURIComponent(url);
  const html = await (await fetch(decoded)).text();
  const dom = new DOMParser().parseFromString(html, "text/html");
  if (!dom) throw new Error("dom is not dound");

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
    url: ogp["og:url"] || decoded,
    title: ogp["og:title"] || dom.title || "No Title",
    image: ogp["og:image"] ?? "",
    domain: new URL(ogp["og:url"]!).hostname ?? "",
  };
}

export async function get(url: string): Promise<OGP> {
  const cache = localStorage.getItem(url);
  if (cache) {
    const cacheJSON = JSON.parse(cache);
    if (isOGP(cacheJSON)) return cacheJSON;
    localStorage.removeItem(url);
  }

  const ogp = await fetchOgp(url);
  localStorage.setItem(url, JSON.stringify(ogp));
  return ogp;
}
