import { css, tw } from "twind/css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehypw-sanitize";
import { components } from "./components.tsx";
import { sanitizeOptions } from "./sanitize.ts";
import { style } from "./styles.ts";

export const Markdown = (props: { markdown: string }) => {
  return (
    <div
      class={tw(css(style))}
    >
      <ReactMarkdown
        children={props.markdown}
        components={components}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypePrism, rehypeRaw, [
          rehypeSanitize,
          sanitizeOptions,
        ]]}
      />
    </div>
  );
};
