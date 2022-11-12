import { Head } from "$fresh/runtime.ts";

export type ContentMetaProps = {
  title?: string;
  description?: string;
};

export const ContentMeta = (props: ContentMetaProps) => {
  return (
    <Head>
      <title>{props.title ?? "asa-blog"}</title>
      <meta property="og:title" content={props.title ?? "asa-blog"} />
      <meta
        property="og:description"
        content={props.description ?? "Personal blog of ASA1984"}
      />
    </Head>
  );
};
