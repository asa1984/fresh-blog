import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { JSX } from "preact";

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
      PreTag="div"
      style={{}}
      wrapLines={true}
      // showLineNumbers
      // lineNumberStyle={(lineNum) => {
      //   return { display: "none" };
      // }}
      // lineProps={(lineNum) => {
      //   const diff = [1, 2];
      //   return diff.includes(lineNum)
      //     ? {
      //       style: {
      //         backgroundColor: "#99ff222b",
      //         display: "block",
      //         width: "100%",
      //       },
      //     }
      //     : {};
      // }}
    >
      {String(children)}
    </SyntaxHighlighter>
  );
};
