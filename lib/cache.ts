import * as z from "zod";

const timeLimitedCacheSchema = z.object({
  date: z.date(),
  value: z.any(),
});

type TimeLimitedCache = z.infer<typeof timeLimitedCacheSchema>;

function getStorage(key: string) {
  const itemString = localStorage.getItem(key);
  if (!itemString) return null;
  try {
    const { date, value } = JSON.parse(itemString) as {
      date: string;
      value: unknown;
    };
    const parsed = timeLimitedCacheSchema.parse({
      date: new Date(date),
      value,
    });
    return parsed;
  } catch (_) {
    return null;
  }
}

function setStorage(key: string, value: unknown) {
  const item = { date: Date.now(), value };
  const itemString = JSON.stringify(item);
  localStorage.setItem(key, itemString);
}

type CacheFunction<T> = {
  key: string;
  fn: (arg: string) => Promise<T>;
  schema: z.ZodSchema<T>;
};

// 5日間
const CACHE_LIMIT_TIME_MS = 432_000_000;

export async function cacheFunction<T>(
  { key, fn, schema }: CacheFunction<T>,
) {
  if (localStorage === undefined) return fn(key);
  const cache = getStorage(key);
  const parsed = schema.safeParse(cache?.value);
  if (
    cache && ((Date.now() - cache.date.getTime()) < CACHE_LIMIT_TIME_MS) &&
    parsed.success
  ) {
    return parsed.data;
  }
  const resp = await fn(key);
  setStorage(key, resp);
  return resp;
}
