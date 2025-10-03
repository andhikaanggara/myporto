import SmallTitle from "../atoms/SmallTitle";
import SmallText from "../atoms/typography/SmallText";
import Card from "../molecules/Card";

export default function Project() {
  return (
    <section
      id="project"
      className="h-[calc(100vh-80px)] p-12 flex flex-col items-start justify-center gap-12"
    >
      <div className="flex flex-col gap-4 items-start">
        <SmallTitle>Project !</SmallTitle>
        <SmallText>Check Out my featured Project</SmallText>
        <div className="flex gap-4">
          <Card>Video Belajar</Card>
          <Card>To-do List</Card>
        </div>
      </div>
    </section>
  );
}
