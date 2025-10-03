import { useEffect, useState } from "react";
import NavLink from "../atoms/button/NavLink";

export default function NavMenu({ darkMode }) {
  const section = ["home", "about", "skill", "project", "contact"];

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      section.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          const scrollPos = window.scrollY + window.innerHeight / 2;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {section.map((sec) => (
        <NavLink
          key={sec}
          href={`#${sec}`}
          darkMode={darkMode}
          isActive={activeSection === sec}
          onClick={() => setActiveSection(sec)}
        >
          {sec.charAt(0).toUpperCase() + sec.slice(1)}
        </NavLink>
      ))}
    </div>
  );
}
