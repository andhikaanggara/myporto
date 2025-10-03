import { Link } from "react-scroll";

export default function NavLink({ children, href, darkMode, isActive }) {
  return (
    <Link
      to={href.replace("#", "")}
      smooth={true}
      duration={500}
      offset={-80}
      role="button"
      className={`text-sm py-2 px-6 transition-colors duration-300 rounded-2xl backdrop-blur-xs  cursor-pointer
        ${darkMode ? "bg-white/10 " : "bg-black/10  "}
        ${
          darkMode
            ? isActive
              ? "border-2  border-black/10 text-black"
              : "border-2 border-transparent text-text-disabled hover:text-black"
            : isActive
            ? "border-2 border-white/10 text-white"
            : "border-2 border-transparent text-text-disabled hover:text-text-primary"
        }`}
    >
      {children}
    </Link>
  );
}
