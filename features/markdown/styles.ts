import { CSSRules } from "twind/css";

const markdownStyle: CSSRules = {
  "h2, h3, h4": {
    fontWeight: "bold",
    wordBreak: "break-word",
  },
  h2: {
    fontSize: "1.6rem",
    marginTop: "1.2rem",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "#5c93bb2b",
  },
  h3: {
    fontSize: "1.4rem",
    marginTop: "1rem",
  },
  h4: {
    fontSize: "1.2rem",
    marginTop: "0.8rem",
  },
  img: {
    margin: "2rem auto",
    maxWidth: "100%",
    height: "auto",
    cursor: "pointer",
    borderRadius: "1rem",
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
  a: {
    color: "#0856fd",
    wordWrap: "break-word",
  },
  "a:hover": {
    borderBottom: "1px solid #0856fd",
  },
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
    color: "#556677",
  },
  "ol li": {
    paddingLeft: "0.2rem",
  },
  blockquote: {
    fontStyle: "italic",
    borderLeft: "3px solid #a0aabb",
    fontSize: "0.95rem",
    color: "#5f5f5f",
    paddingLeft: "0.8rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.8rem",
    margin: "1rem 0",
  },
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
  thead: {
    background: "#e4edf3",
  },
  th: {
    fontWeight: "bold",
  },
  "th,td": {
    padding: "0.5rem",
    border: "1px solid #cccddd",
  },
  hr: {
    margin: "2rem 0",
  },
  details: {
    marginTop: "1rem",
    padding: "0.6rem 0.6rem 0",
    border: "1px solid #5c93bb2b",
    borderRadius: "0.6rem",
    boxShadow: "0px 2px 3px -2px #00000010",
    wordWrap: "break-word",
  },
  summary: {
    cursor: "pointer",
    padding: "0.6rem",
    margin: "-0.6rem -0.6rem 0",
    overflow: "hidden",
  },
  "summary:hover": {
    backgroundColor: "#f9fafb",
  },
  "details[open]": {
    padding: "0.6rem",
  },
  "details[open] summary": {
    borderBottom: "1px solid #5c93bb2b",
    borderRadius: "0.6rem 0.6rem 0 0",
    marginBottom: "0.6rem",
  },
};

const syntsxHighlightStyle: CSSRules = {
  pre: {
    margin: "1rem -0.5rem",
  },
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
};

export const style = { ...markdownStyle, ...syntsxHighlightStyle };
