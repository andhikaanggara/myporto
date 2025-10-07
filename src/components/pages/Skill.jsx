import SmallTitle from "../atoms/SmallTitle";
import { Icon } from "@iconify/react";
import SmallText from "../atoms/typography/SmallText";
import Heading from "../atoms/typography/Heading";

export default function Skill() {
  return (
    <section
      id="skill"
      className="h-[calc(100vh-80px)] px-12 flex flex-col items-start justify-center gap-12"
    >
      <SmallTitle>Skills</SmallTitle>
      <div className="flex justify-around w-full">
        <div className="flex flex-col gap-8 items-center">
          {/* Core Skill */}
          <Heading level="h3">Core Skills</Heading>
          <div className="flex items-center justify-around gap-8">
            <div className="flex flex-col items-center gap-2">
              <Icon icon="devicon:tailwindcss" height="48" />
              <SmallText>Tailwind CSS</SmallText>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon="devicon:react" height="48" />
              <SmallText>React</SmallText>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon="devicon:javascript" height="48" />
              <SmallText>JavaScript</SmallText>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          {/* Tools & Workflow */}
          <Heading level="h3">Tools & Workflow</Heading>
          <div className="flex items-center justify-around gap-8">
            <div className="flex flex-col items-center gap-2">
              <Icon icon="devicon:git" height="48" />
              <SmallText>Git</SmallText>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon="devicon:vitejs" height="48" />
              <SmallText>Vite</SmallText>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon="devicon:figma" height="48" />
              <SmallText>Figma</SmallText>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon icon="devicon:vscode" height="48" />
              <SmallText>VS Code</SmallText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
