import { Main, Navbar, Sidebar } from "@/components";
import { useDrawer } from "@/hooks";
import { twMerge } from "tailwind-merge";

const PayoutsPage = () => {
  const { isOpen } = useDrawer();
  return (
    <div className="h-screen w-screen grid grid-cols-6">
      <div
        className={twMerge(
          "lg:hidden fixed left-0 w-[60vw] md:w-[30vw] transition-transform transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar />
      </div>
      <div className="hidden lg:block col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-6 lg:col-span-5 flex flex-col lg:overflow-y-hidden">
        <Navbar />
        <main className="flex-1">
          <Main />
        </main>
      </div>
    </div>
  );
};

export default PayoutsPage;
