import SmallText from "../typography/SmallText";

export default function ButtonCTA({ children, onClick, icon: Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      onClick={onClick}
      className="px-6 py-2  rounded-xl text-text-secondary  bg-gradient-to-tr from-primary to-accent  hover:from-accent hover:to-primary transition-colors duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap mr-auto"
    >
      <SmallText>{children}</SmallText>
      {Icon && <Icon size={18} />}
    </a>
  );
}
