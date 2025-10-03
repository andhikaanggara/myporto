export default function ButtonIcon({ href, icon: Icon }) {
  return (
    <a
      href={href}
      className="border-2 border-white/20 rounded-full p-3 hover:border-white transition-colors duration-300 cursor-pointer text-white/50 hover:text-white "
      target="_blank"
    >
      {Icon && <Icon size={18} />}
    </a>
  );
}
