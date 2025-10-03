export default function ButtonProject({ href, onClick, children }) {
  return (
    <a
      href={href}
      target="_blank"
      onClick={onClick}
      className="px-6 py-1  rounded-xl text-text-secondary bg-gradient-to-tr from-primary to-accent  hover:from-accent hover:to-primary transition-colors duration-300 cursor-pointer m-4"
    >
      <p className="font-body text-sm text-white/70">{children}</p>
    </a>
  );
}
