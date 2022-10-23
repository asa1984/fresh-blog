import { defaultSchema, Options } from "rehypw-sanitize";

const attributes = {
  a: ["aria-hidden", "className", "href", "id", "rel", "target", "title"],
  blockquote: [],
  br: [],
  code: ["className"],
  details: [],
  del: [],
  div: ["className"],
  em: [],
  h1: ["id"],
  h2: ["id"],
  h3: ["id"],
  hr: [],
  img: ["alt", "className", "loading", "src", "title"],
  input: ["checked", "className", "type"],
  li: ["className", "id"],
  ol: ["className", "start"],
  p: [],
  pre: ["className"],
  section: ["className"],
  span: ["className"],
  strong: [],
  summary: [],
  sup: [],
  table: [],
  tbody: [],
  td: [],
  th: [],
  thead: [],
  tr: [],
  ul: ["className"],
};

export const sanitizeOptions: Options = {
  ...defaultSchema,
  clobber: [],
  attributes: {
    ...defaultSchema.attributes,
    ...attributes,
  },
};
