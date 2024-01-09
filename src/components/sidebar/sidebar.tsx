import SidebarBottom from "@/components/sidebar/sidebar-bottom";
import SidebarLinks from "@/components/sidebar/sidebar-links";
import SidebarTop from "@/components/sidebar/sidebar-top";

const Sidebar = () => {
  return (
    <div className="h-screen bg-primary text-white flex flex-col p-4 gap-8">
      <SidebarTop />
      <SidebarLinks />
      <SidebarBottom />
    </div>
  );
};

export default Sidebar;
