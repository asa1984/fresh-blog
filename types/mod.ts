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

export const ogpSchema = z.object({
  url: z.string(),
  title: z.string(),
  image: z.string().nullish(),
  domain: z.string(),
});

export type OGP = z.infer<typeof ogpSchema>;
