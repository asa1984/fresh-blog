import { apply, CSSRules, theme } from "twind/css";

const markdownStyle: CSSRules = {
  "h2, h3, h4": {
    fontWeight: "bold",
    lineHeight: "1.4",
    wordBreak: "break-word",
  },
  h2: {
    fontSize: "1.6rem",
    marginTop: "2rem",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "#5c93bb2b",
  },
  h3: {
    fontSize: "1.4rem",
    marginTop: "1.8rem",
  },
  h4: {
    fontSize: "1.2rem",
    marginTop: "1.6rem",
  },
  img: {
    margin: "2rem auto",
    maxWidth: "100%",
    height: "auto",
    cursor: "pointer",
    borderRadius: "0.5rem",
  },
  p: {
    marginTop: "1rem",
  },
  strong: {
    fontWeight: "bold",
  },
  em: {
    fontStyle: "italic",
  },
  a: apply("text-blue-500 hover:border-b-1 border-blue-500"),
  ".contains-task-list": {
    paddingLeft: "0.5rem",
    listStyle: "none",
  },
  ul: {
    paddingLeft: "1.8rem",
    margin: "1rem 0",
    listStyleType: "initial",
  },
  ol: {
    paddingLeft: "1.5rem",
    margin: "1rem 0",
    listStyleType: "revert",
  },
  li: {
    margin: "0.4rem 0",
  },
  "li::marker": {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: theme("colors.gray.500"),
  },
  "ol li": {
    paddingLeft: "0.2rem",
  },
  blockquote: apply(
    "mt-4 pl-3 pt-0.5 pb-4 border-l-4 border-gray-400 text-gray-600 dark:text-gray-300 italic",
  ),
  code: {
    wordBreak: "break-word",
    padding: "0.1rem 0.4rem",
    margin: "0 0.2rem",
    background: "#5c93bb2b",
    borderRadius: "0.2rem",
  },
  ".footnotes": {
    marginTop: "3rem",
  },
  table: {
    display: "block",
    margin: "1rem 0",
    width: "auto",
    overflow: "auto",
    borderCollapse: "collapse",
    lineHeight: "1.5",
  },
  thead: apply("bg-gray-300 dark:bg-gray-600"),
  th: {
    fontWeight: "bold",
  },
  "th,td": {
    padding: "0.5rem",
    border: "1px solid",
    borderColor: theme("colors.gray.400"),
  },
  hr: {
    margin: "2rem 0",
  },
  details: apply(
    "my-6 pt-2 px-2 border-1 border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden",
  ),
  summary: apply(
    "mt-[-0.5rem] mx-[-0.5rem] p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer",
  ),
  "details[open]": apply("p-2"),
  "details[open] summary": apply(
    "mb-2 border-b-1 border-gray-300 dark:border-gray-600 transition-none  rounded-tr-lg rounded-tl-lg",
  ),
};

const syntsxHighlightStyle: CSSRules = {
  pre: {
    margin: "1.5rem -0.5rem",
    maxBlockSize: "max-content",
  },
  "pre div": { visibility: "" },
  "pre code": {
    display: "block",
    backgroundColor: "#283042",
    padding: "1rem 0.8rem",
    margin: "auto auto",
    borderRadius: "0.75rem",
    color: "#fff",
    fontSize: "0.9rem",
    lineHeight: "1.5",
    overflowX: "auto",
  },
  ".keyword": { color: "#f8baff" },
  ".string": { color: "#c5e797" },
  ".number": { color: "#c5e797" },
  ".function": { color: "#95bfff" },
  ".operator": { color: "#f6c77b" },
  ".punctuation": { color: "#aaaaaa" },
  ".comment": { color: "#aaaaaa" },
  // ".tag": { color: "#d5787b" },
  // ".tag.punctuation": { color: "#aaaaaa" },
};

export const style = { ...markdownStyle, ...syntsxHighlightStyle };
