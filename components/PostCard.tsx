import { Article } from "@/types/mod.ts";

export const PostCard = (props: Article) => {
  const progressDate = (() => {
    const diffMS = Date.now() - props.date.getTime();
    const progress = new Date(diffMS);
    if (progress.getUTCFullYear() - 1970) {
      return `${progress.getUTCFullYear() - 1970}年前`;
    } else if (progress.getUTCMonth()) {
      return `${progress.getUTCMonth()}ヶ月前`;
    } else if (progress.getUTCDate() - 1) {
      return `${progress.getUTCDate() - 1}日前`;
    } else {
      return "今日";
    }
  })();

  return (
    <div className="my-6">
      <a href={`/articles/${props.slug}`}>
        <h2 className="font-bold text-3xl">{props.title}</h2>
      </a>
      <div className="mt-2">
        <p>{props.overview}</p>
        <time className="text-sm" dateTime={props.date.toJSON()}>
          {progressDate}
        </time>
      </div>
    </div>
  );
};
