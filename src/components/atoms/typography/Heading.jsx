export default function Heading({ children, level = "h1", className = "" }) {
  const Tag = level;
  const size =
    level === "h1"
      ? "text-4xl md:text-5xl font-bold"
      : level === "h2"
      ? "text-3xl md:text-4xl font-semibold"
      : "text-2xl md:text-3xl font-semibold";

  return <Tag className={`font-heading text-text-primary ${size}  ${className}`}>{children}</Tag>;
}
