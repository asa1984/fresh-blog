import { JSX } from "preact";

type AnchorProps = JSX.HTMLAttributes<HTMLAnchorElement>;

export const Anchor = (
  { href, id, className, children }: AnchorProps,
) => {
  if (String(children) === "@card") {
    return (
      <div className="my-4 h-[120px] border-1 border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
        {href && (
          <iframe
            src={`/api/embed/${encodeURIComponent(href)}`}
            loading="lazy"
            scrolling="no"
            className="w-full h-full"
          >
          </iframe>
        )}
      </div>
    );
  }

  return (
    <a
      href={href}
      id={id}
      target={href?.startsWith("#") ? "_self" : "_blank"}
      rel="nofollow noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};
