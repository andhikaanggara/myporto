import { useState } from "react";
import Sidebar from "../organisms/Sidebar";
import Navbar from "../organisms/Navbar";

export default function MainLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex transition-colors duration-300  ${darkMode ? "bg-white" : "bg-black"}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar darkMode={darkMode} onClick={() => setDarkMode(!darkMode)}/>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
