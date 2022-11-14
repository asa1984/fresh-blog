import { Components } from "react-markdown";
import { Anchor } from "./components/Anchor.tsx";
import { CodeBlock } from "./components/CodeBlock.tsx";

export const components: Components = {
  h1: "h2",
  h2: "h3",
  h3: "h4",
  h4: "h4",
  h5: "h4",
  h6: "h4",
  a: ({ href, id, title, className, children }) =>
    Anchor({ href, id, title, className, children }),
  img: ({ src, alt }) => <img src={src} alt={alt} loading="lazy" />,
  code: ({ inline, className, children }) =>
    CodeBlock({ inline, className, children }),
  sup: ({ children }) => <sup>{`[${children}]`}</sup>,
};
