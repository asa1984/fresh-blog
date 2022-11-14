import { OGP, ogpSchema } from "@/types/mod.ts";
import { useEffect, useState } from "preact/hooks";

export default function LinkCard(props: { url: string }) {
  const [data, setData] = useState<OGP | null>(null);
  useEffect(() => {
    fetch(`/api/embed/${encodeURIComponent(props.url)}`).then((resp) =>
      resp.json()
    )
      .then((json) => setData(ogpSchema.parse(json)));
  });
  return (
    <div className="w-full h-[120px] dark:(bg-gray-900 hover:bg-gray-800 text-white) hover:bg-gray-50 border-1 rounded-lg">
      <a
        href={data ? data.url : ""}
        target="_blank"
        rel="nofollow noopener noreferer"
        className="block w-full h-full border-none"
      >
        <div className="flex">
          <div class="self-center p-4">
            <h1 class="max-h-12 w-full text-base font-bold overflow-hidden">
              {data ? data.title : ""}
            </h1>
            <div class="flex mt-4 overflow-hidden ">
              <img
                src={`http://www.google.com/s2/favicons?size=16&domain_url=${
                  data ? data.domain : ""
                }`}
                alt={data ? data.domain : ""}
                className="w-[16px] h-[16px] m-0 mr-1"
              />
              <small class="text-gray-700 dark:text-gray-300 text-base leading-none font-medium">
                {data ? data.domain : ""}
              </small>
            </div>
          </div>
        </div>
        {
          /* <div class="flex-shrink-0 bg-gray-50">
        {datadata.image && (
          <img
            src={data.image}
            class="w-[120px] sm:w-full h-full object-cover"
          />
        )}
      </div> */
        }
      </a>
    </div>
  );
}
