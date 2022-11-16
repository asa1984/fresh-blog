import { Head } from "$fresh/runtime.ts";

export type ContentMetaProps = {
  title?: string;
  description?: string;
  type?: "website" | "article";
};

export const ContentMeta = (
  {
    title = "TrashBox",
    description = "Personal blog by Asahi Sato",
    type = "website",
  }: ContentMetaProps,
) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:type" content={type} />
      <meta
        property="og:image"
        content="https://trashbox-asa.deno.dev/my_god.jpg"
      />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@asa_high_ost" />
      <meta name="twitter:creator" content="@asa_high_ost" />
    </Head>
  );
};
