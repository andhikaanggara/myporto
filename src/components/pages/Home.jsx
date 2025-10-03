import { Briefcase } from "lucide-react";
import ButtonCTA from "../atoms/button/ButtonCTA";
import SmallTitle from "../atoms/SmallTitle";
import Heading from "../atoms/typography/Heading";

export default function Home() {
  return (
    <section
      id="home"
      className="h-[calc(100vh-80px)] p-12 flex flex-col items-start justify-center gap-12"
    >
      <div className="flex flex-col gap-4 items-start">
        <SmallTitle>Let's meet !</SmallTitle>
        <Heading>I'm ANDHIKA ANGGARA</Heading>
        <Heading level="h2">Front End Developer</Heading>
      </div>
      <ButtonCTA icon={Briefcase}>View My Work</ButtonCTA>
    </section>
  );
}
