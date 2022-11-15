import { Article } from "@/types/mod.ts";

export const PostCard = (props: Article) => {
  const progressDate = (() => {
    const diffMS = Date.now() - props.date.getTime();
    const progress = new Date(diffMS);
    const progressYear = progress.getUTCFullYear() - 1970;
    const progressMonth = progress.getUTCMonth();
    const progressDate = progress.getUTCDate() - 1;
    if (progressYear) {
      return progressYear === 1 ? "Last year" : `${progressYear} years ago`;
    } else if (progressMonth) {
      return progressMonth === 1 ? "Last month" : `${progressMonth} months ago`;
    } else if (progressDate) {
      return progressDate === 1 ? "Yesterday" : `${progressDate} days ago`;
    } else {
      return "Today";
    }
  })();

  return (
    <div className="mt-8">
      <a href={`/articles/${props.slug}`}>
        <h2 className="font-bold text-3xl">{props.title}</h2>
      </a>
      <div className="mt-1.5">
        <p>{props.overview}</p>
        <time
          className="font-medium text-gray-500 dark:text-gray-400"
          dateTime={props.date.toJSON()}
        >
          {progressDate}
        </time>
      </div>
    </div>
  );
};
