import { Handlers, PageProps } from "$fresh/server.ts";
import { OGP, ogpSchema } from "@/types/mod.ts";
import { getOGP } from "@/lib/ogp.ts";
import { cacheFunction } from "@/lib/cache.ts";

export const handler: Handlers<OGP> = {
  async GET(_, ctx) {
    const { url } = ctx.params;
    const decoded = decodeURIComponent(url);
    // FIX: localStorage is unable on Deno Deploy
    // const ogp = await cacheFunction({
    //   key: decoded,
    //   fn: getOGP,
    //   schema: ogpSchema,
    // });
    const ogp = await getOGP(decoded);
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
              class="w-[16px] h-[16px] mr-1.5"
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
