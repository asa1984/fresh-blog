import * as z from "zod";

export type OGP = {
  url: string;
  title: string;
  image: string;
  domain: string;
};

export const ogpSchema = z.object({
  url: z.string().nullish(),
  title: z.string().nullish(),
  image: z.string().nullish(),
  domain: z.string().nullish(),
});

type OG = z.infer<typeof ogpSchema>;
