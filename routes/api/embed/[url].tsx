import { Handlers, PageProps } from "$fresh/server.ts";
import { DOMParser } from "deno-dom/deno-dom-wasm.ts";

interface OGP {
  url: string;
  title: string;
  image: string;
  domain: string;
}

export const handler: Handlers<OGP> = {
  async GET(_, ctx) {
    const { url } = ctx.params;
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
    return await ctx.render({
      url: ogp["og:url"] || decoded,
      title: ogp["og:title"] || dom.title || "No Title",
      image: ogp["og:image"] ?? "",
      domain: new URL(ogp["og:url"]!).hostname ?? "",
    });
  },
};

export default function EmbedLinkCard({ data }: PageProps<OGP>) {
  const { url, title, image, domain } = data;
  return (
    <div class="w-full h-[120px]">
      <a
        href={url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        class="flex justify-between h-full"
      >
        <div class="self-center p-4">
          <h1 class="max-h-12 w-full font-bold text-base overflow-hidden">
            {title}
          </h1>
          <div class="flex self-center mt-4 overflow-hidden text-gray-700 text-[16px] leading-none">
            <img
              src={`http://www.google.com/s2/favicons?size=16&domain_url=${domain}`}
              alt={domain}
              class="w-[16px] h-[16px] mr-1"
            />
            {domain}
          </div>
        </div>
        <div class="flex-shrink-0 bg-gray-50">
          {image && (
            <img src={image} class="w-[120px] sm:w-full h-full object-cover" />
          )}
        </div>
      </a>
    </div>
  );
}
