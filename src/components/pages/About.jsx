import SmallTitle from "../atoms/SmallTitle";
import Heading from "../atoms/typography/Heading";
import SmallText from "../atoms/typography/SmallText";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="h-[calc(100vh-80px)] px-12 flex flex-col items-start justify-center gap-12 pb-8"
    >
      <SmallTitle>About Me</SmallTitle>
      <Heading level="h3">Turning Precision into Digital Clarity</Heading>
      <div className="flex gap-4">
        <div className="flex flex-col gap-0">
          <SmallText>
            I began my professional journey as a Pharmacist — a field where
            accuracy, structure, and attention to detail are non-negotiable.
            That foundation shaped the way I now approach Front-End Development:
            methodically, purpose-driven, and user-focused.
          </SmallText>
          <br />
          <SmallText>
            Today, I specialize in crafting intuitive, scalable interfaces for
            SaaS platforms that balance performance with simplicity. I love
            transforming complex business logic into seamless digital
            experiences that feel effortless for users and efficient for teams.
          </SmallText>
          <br />
          <SmallText>
            I’m currently open to collaborations, freelance projects, or
            full-time roles where design, logic, and technology meet.
          </SmallText>
        </div>
        <div className="flex flex-col gap-2 justify-end">
          <div className="flex flex-col">
            <SmallText>Name</SmallText>
            <SmallText>Andhika Anggara Pratama</SmallText>
          </div>
          <div className="flex flex-col">
            <SmallText>Phone</SmallText>
            <SmallText>+62 812 8256 4622</SmallText>
          </div>
          <div className="flex flex-col">
            <SmallText>Email</SmallText>
            <SmallText>andhika.anggara2127@gmail.com</SmallText>
          </div>
          <div className="flex flex-col">
            <SmallText>Location</SmallText>
            <SmallText>Tasikmalaya, Indonesia</SmallText>
          </div>
        </div>
      </div>
    </section>
  );
}
