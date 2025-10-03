import { Sparkles } from "lucide-react";
import SmallText from "./typography/SmallText";

export default function SmallTitle({ children }) {

  return (
    <button className="flex items-center gap-2 border border-white/20 rounded-full py-1 px-4">
      <Sparkles size={14} className="text-white"/>
      <SmallText>{children}</SmallText>
    </button>
  );
}
