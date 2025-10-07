import ButtonProject from "../atoms/button/ButtonProject";

export default function CardProject({ children, href }) {
  return (
    <div className="border border-white/20 size-75 flex items-end rounded-lg hover:shadow-inner shadow-accent ">
      <ButtonProject href={href}>{children}</ButtonProject>
    </div>
  );
}
