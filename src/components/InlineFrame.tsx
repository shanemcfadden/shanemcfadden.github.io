export const InlineFrame = ({ src, title }: { src: string; title: string }) => (
  <iframe
    className="w-full aspect-16/23"
    allowFullScreen
    scrolling="auto"
    src={src}
    title={title}
  />
);
