import { Article } from "@/libs/article.ts";

export const PostCard = (props: Article) => {
  return (
    <div className="py-4">
      <a href={`/article/${props.slug}`}>
        <h2 className="font-bold text-3xl">{props.title}</h2>
      </a>
      <div>
        <small>{props.publishedAt}</small>
        <p>{props.overview}</p>
      </div>
    </div>
  );
};
