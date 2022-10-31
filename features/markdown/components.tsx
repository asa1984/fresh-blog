import { Components } from "react-markdown";
import { Anchor } from "./components/Anchor.tsx";
import { CodeBlock } from "./components/CodeBlock.tsx";

export const components: Components = {
  h4: "h3",
  h5: "h3",
  h6: "h3",
  a: ({ href, id, title, className, children }) =>
    Anchor({ href, id, title, className, children }),
  img: ({ src, alt, title }) => (
    <img src={src} alt={alt} loading="lazy" title={title} />
  ),
  code: ({ inline, className, children }) =>
    CodeBlock({ inline, className, children }),
};
