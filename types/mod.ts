import * as z from "zod";

export const articleSchema = z.object({
  slug: z.string(),
  title: z.string(),
  overview: z.string(),
  date: z.date(),
  publish: z.boolean(),
  content: z.string(),
});

export type Article = z.infer<typeof articleSchema>;
