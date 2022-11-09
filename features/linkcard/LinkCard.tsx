import { OGP } from "./types.ts";

export const EmbedLinkCard = ({ url, title, image, domain }: OGP) => {
  return (
    <div class="w-full h-[120px] hover:bg-gray-50">
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
              src={`http://www.google.com/s2/favicons?size=16&domain_url=${domain}`}
              alt={domain}
              class="w-[16px] h-[16px] mr-1"
            />
            <small class="text-gray-700 text-xs leading-none">
              {domain}
            </small>
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
};
