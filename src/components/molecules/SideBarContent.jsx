import ButtonCTA from "../atoms/button/ButtonCTA";
import Heading from "../atoms/typography/Heading";
import Profile from "../../assets/Images/Profile.png";
import ButtonIcon from "../atoms/button/ButtonIcon";
import {
  Github,
  Instagram,
  Linkedin,
  Download,
  CheckCircle,
  Code2,
  Users,
  Layers,
} from "lucide-react";
import ReactIcon from "../../assets/icon/React-icon.png";
import TailwindIcon from "../../assets/icon/Tailwind-icon.png";
import JavaScriptIcon from "../../assets/icon/JavaScript-icon.png";
import GithubIcon from "../../assets/icon/Github-icon.png";

export default function SideBarContent() {
  return (
    <div className="flex flex-col justify-between items-center border border-white/20 h-screen rounded-4xl backdrop-blur-sm bg-white/10 p-6">
      {/* Top Section */}
      <div className="flex flex-col items-center">
        {/* Foto*/}
        <div className="w-full max-w-[200px]">
          <img src={Profile} alt="Andhika" />
        </div>

        {/* Nama */}
        <Heading level="h3" className="text-center">
          Andhika Anggara
        </Heading>

        {/* Tagline */}
        <p className="text-xs text-text-muted text-center mt-2">
          Crafting responsive & modern websites with React & Tailwind.
        </p>

        {/* Availability Badge */}
        <div className="mt-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400/20 to-green-500/10 border border-green-400/30  rounded-full transition-transform">
          <CheckCircle size={16} className="text-green-400" />
          <span className="text-xs font-semibold text-green-300 tracking-wide">
            Open to Work
          </span>
        </div>
      </div>

      {/* Mini Skill Chips */}
      {/* <div className="flex justify-center gap-4 ">
        {[ReactIcon, TailwindIcon, JavaScriptIcon, GithubIcon].map(
          (icon, i) => (
            <div
              key={i}
              className="flex items-center rounded-full bg-white/10  transition-all hover:shadow-lg hover:shadow-accent cursor-pointer duration-300"
            >
              <div className="hover:scale-120 transition-all w-12 h-12 p-3 rounded-full flex items-center duration-300">
                <img src={icon} alt={icon} />
              </div>
            </div>
          )
        )}
      </div> */}

      {/* Quick Stats
      <div className="grid grid-cols-3 gap-3 text-center mt-6 w-full">
          <div className="flex flex-col items-center p-2 rounded-xl bg-white/5 backdrop-blur-sm">
            <Code2 size={18} className="text-purple-400 mb-1" />
            <span className="text-lg font-bold">5+</span>
            <p className="text-xs text-gray-400">Projects</p>
          </div>
          <div className="flex flex-col items-center p-2 rounded-xl bg-white/5 backdrop-blur-sm">
            <Layers size={18} className="text-blue-400 mb-1" />
            <span className="text-lg font-bold">2+</span>
            <p className="text-xs text-gray-400">Years</p>
          </div>
          <div className="flex flex-col items-center p-2 rounded-xl bg-white/5 backdrop-blur-sm">
            <Users size={18} className="text-yellow-400 mb-1" />
            <span className="text-lg font-bold">3</span>
            <p className="text-xs text-gray-400">Clients</p>
          </div>
        </div> */}

      {/* Sosmed btn */}
      <div className="flex gap-4">
        <ButtonIcon icon={Github} href="https://github.com/andhikaanggara" />
        <ButtonIcon
          icon={Linkedin}
          href="https://www.linkedin.com/in/andhikaanggara/"
        />
        <ButtonIcon
          icon={Instagram}
          href="https://www.instagram.com/andhikaaptama?igsh=MnJsZ21wcTI3Zm1u"
        />
      </div>

      {/* Buttom Section */}
      <div className="flex flex-col items-center gap-4">
        {/* Download CV */}
        <ButtonCTA
          icon={Download}
          href="https://docs.google.com/document/d/1YvmB_KtKLSECv-d-E4nOzYNXA9RMEVcXFZsZlBg9W98/edit?tab=t.0"
        >
          Download CV
        </ButtonCTA>
      </div>
    </div>
  );
}
