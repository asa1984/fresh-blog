import { walk } from "$std/fs/walk.ts";
import { extname } from "$std/path/mod.ts";
import { extract } from "$std/encoding/front_matter.ts";
import { stringify } from "$std/encoding/yaml.ts";

// postsディレクトリ下のMarkdownファイルにcreated_dateを追加する

const filePaths: string[] = [];
for await (const entry of walk("./posts")) {
  if (entry.isFile && extname(entry.path) === ".md") {
    filePaths.push(entry.path);
  }
}

await Promise.all(filePaths.map(async (path) => {
  const text = await Deno.readTextFile(path);
  const { attrs, body } = extract(text);
  if (!attrs.publish) return;
  if (attrs["published_at"]) return;
  const date = new Date().toLocaleDateString();
  const matter = stringify({ ...attrs, "published_at": date });
  const content = `---\n${matter}---\n\n${body}`;
  await Deno.writeTextFile(path, content);
}));
