import LeftComponent from "@/components/navbar/left-component";
import RightComponent from "@/components/navbar/right-component";
import Search from "@/components/navbar/search";

const Navbar = () => {
  return (
    <nav className="h-14 p-4 flex items-center justify-between border-b-[1px] border-b-muted shadow-lg">
      <LeftComponent />
      <div className="flex-1">
        <Search />
      </div>
      <RightComponent />
    </nav>
  );
};

export default Navbar;
