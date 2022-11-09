import { Head } from "$fresh/runtime.ts";

export type ContentMetaProps = {
  title: string;
  description: string;
};

export const ContentMeta = (props: ContentMetaProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
    </Head>
  );
};
