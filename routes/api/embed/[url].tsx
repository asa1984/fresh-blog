import { Handlers, PageProps } from "$fresh/server.ts";
import { DOMParser } from "deno-dom/deno-dom-wasm.ts";

type OGP = {
  url: string;
  title: string;
  image: string;
  domain: string;
};

export const handler: Handlers<OGP> = {
  async GET(_, ctx) {
    const { url } = ctx.params;
    const decoded = decodeURIComponent(url);
    const html = await (await fetch(decoded)).text();
    const dom = new DOMParser().parseFromString(html, "text/html");
    if (!dom) throw new Error("dom is not dound");

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
      url: meta["og:url"] || decoded,
      title: meta["og:title"] || dom.title || "No Title",
      image: meta["og:image"] ?? "",
      domain: new URL(meta["og:url"]!).hostname ?? "",
    };
    return ctx.render(ogp);
  },
};

export default function EmbedLinkCard({ data }: PageProps<OGP>) {
  const { url, title, image, domain } = data;
  return (
    <div class="w-full h-[120px] text-black hover:bg-gray-100 dark:(text-white hover:bg-gray-800)">
      <a
        href={url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        class="h-full flex justify-between"
      >
        <div class="self-center p-4">
          <h1 class="max-h-12 w-full text-base font-bold overflow-hidden">
            {title}
          </h1>
          <div class="flex self-center mt-4 overflow-hidden ">
            <img
              src={`http://www.google.com/s2/favicons?size=14&domain_url=${domain}`}
              alt={domain}
              class="w-[16px] h-[16px] mr-1"
            />
            <span className="text-gray-500 dark:text-gray-400 text-base leading-none font-medium">
              {domain}
            </span>
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
