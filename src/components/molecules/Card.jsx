import ButtonProject from "../atoms/button/ButtonProject";

export default function Card({ children }) {
  return (
    <div className="border border-white/20 size-75 flex items-end rounded-lg">
      <ButtonProject>{children}</ButtonProject>
    </div>
  );
}
