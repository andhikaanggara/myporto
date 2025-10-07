import SmallTitle from "../atoms/SmallTitle";
import SmallText from "../atoms/typography/SmallText";
import CardProject from "../molecules/CardProject";

export default function Project() {
  return (
    <section
      id="project"
      className="h-[calc(100vh-80px)] px-12 flex flex-col items-start justify-center gap-12"
    >
      <div className="flex flex-col gap-4 items-start">
        <SmallTitle>Project !</SmallTitle>
        <SmallText>Check Out my featured Project</SmallText>
        <div className="flex gap-4">
          <CardProject href="https://videobelajar-react-nine.vercel.app/">
            Video Belajar
          </CardProject>
          <CardProject>To-do List</CardProject>
        </div>
      </div>
    </section>
  );
}
