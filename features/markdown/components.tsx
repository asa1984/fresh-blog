import { Components } from "react-markdown";

export const components: Components = {
  h4: "h3",
  h5: "h3",
  h6: "h3",
  a: ({ children, href, id, className }) => {
    return (
      <a
        href={href}
        id={id}
        target={href?.startsWith("#") ? "_self" : "_blank"}
        rel="nofollow noopener noreferrer"
        class={className}
      >
        {children}
      </a>
    );
  },
  img: ({ src, alt, title }) => (
    <img src={src} alt={alt} loading="lazy" title={title} />
  ),
};
