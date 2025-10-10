import { Briefcase } from "lucide-react";
import ButtonCTA from "../atoms/button/ButtonCTA";
import SmallTitle from "../atoms/SmallTitle";
import Heading from "../atoms/typography/Heading";
import { useAuthStore } from "../../Store/authStore";

export default function Home() {
  const { isLoggedIn, toggleLogin } = useAuthStore();
  return (
    <section
      id="home"
      className="h-[calc(100vh-80px)] px-12 flex flex-col items-start justify-center gap-12"
    >
      {/* <button onClick={toggleLogin} className="text-white">
        {isLoggedIn ? "Logout" : "Login"}
      </button> */}
      <div className="flex flex-col gap-4 items-start">
        <SmallTitle>Let's meet !</SmallTitle>
        <Heading>I'm ANDHIKA ANGGARA</Heading>
        <Heading level="h3">
          Front-End Developer specialized in building clean, scalable SaaS
          interfaces.
        </Heading>
      </div>
      <ButtonCTA icon={Briefcase}>View My Work</ButtonCTA>
    </section>
  );
}
