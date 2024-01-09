import { sidebarLinks } from "@/constants";
import { twMerge } from "tailwind-merge";

const SidebarLinks = () => {
  return (
    <div className="flex flex-col">
      {sidebarLinks.map((link) => (
        <div
          key={link.name}
          className={twMerge(
            "flex items-center p-2 gap-2 text-muted rounded-md cursor-pointer hover:bg-muted-primary",
            link.name === "Payments" && "bg-muted-primary"
          )}
        >
          <link.icon size={18} />
          <p>{link.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SidebarLinks;
