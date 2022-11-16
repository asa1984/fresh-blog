import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { JSX } from "preact";
import { style } from "../styles.ts";

export type CodeBlockProps = JSX.HTMLAttributes<HTMLElement> & {
  inline?: boolean;
};

export const CodeBlock = (
  { inline, className, children }: CodeBlockProps,
) => {
  const langName = (className ?? "").replace("language-", "");
  return inline ? <code>{children}</code> : (
    <SyntaxHighlighter
      language={langName}
      PreTag={({ children }) => <>{children}</>}
      wrapLines={true}
      style={{ "pre div": { backgroundColor: "transparent" } }}
    >
      {String(children)}
    </SyntaxHighlighter>
  );
};
