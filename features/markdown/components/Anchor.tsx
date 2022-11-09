import { JSX } from "preact";

type AnchorProps = JSX.HTMLAttributes<HTMLAnchorElement>;

export const Anchor = (
  { href, id, className, children }: AnchorProps,
) => {
  if (String(children) === "@card") {
    const encoded = encodeURIComponent(href ?? "");
    return (
      <div className="my-4">
        <iframe
          src={`/api/embed/${encoded}`}
          loading="lazy"
          scrolling="no"
          className="w-full h-[120px] border-1 rounded-lg overflow-hidden"
        >
        </iframe>
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
