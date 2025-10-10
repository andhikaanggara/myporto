import NavMenu from "../molecules/NavMenu";
import ToggleDarkMode from "../atoms/button/ToggleDarkMode";
import ButtonCTA from "../atoms/button/ButtonCTA";
import { Handshake } from "lucide-react";
import { useAuthStore } from "../../Store/authStore";

export default function Navbar({ darkMode, onClick }) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <nav
      className={` flex items-center justify-between px-6 h-20 sticky top-0 z-50 `}
    >
      <NavMenu darkMode={darkMode} />
      <div className="flex items-center gap-6">
        {/* <ToggleDarkMode darkMode={darkMode} onClick={onClick} /> */}
        <ButtonCTA icon={Handshake}>Let's Work</ButtonCTA>
      </div>
    </nav>
  );
}
