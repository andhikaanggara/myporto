import SidebarContent from "../molecules/SideBarContent";

export default function Sidebar() {
  return (
    <aside className="w-100 flex flex-col items-center sticky top-0 h-screen p-6 ">
      <SidebarContent />
    </aside>
  );
}
