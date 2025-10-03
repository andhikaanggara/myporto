import { Moon, Sun } from "lucide-react";

export default function ToggleDarkMode({ darkMode, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full transition duration-300 cursor-pointer ${
        darkMode ? "hover:bg-gray-200" : "hover:bg-gray-700"
      }`}
    >
      {darkMode ? (
        <Moon size={18} className="text-gray-700" />
      ) : (
        <Sun size={18} className="text-yellow-400" />
      )}
    </button>
  );
}
