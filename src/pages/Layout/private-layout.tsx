import { Outlet } from "react-router";
import { Sidebar } from "../Utilities/sidebar";
import { HamburgerButton } from "@/components/CustomButton/hamburger-button";

export function PrivateLayout() {
  return (
    <div>
      {/* <div>
        <Navbar />
      </div> */}
      <div className="flex lg:flex-row flex-col">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="z-50">
          <HamburgerButton/>
        </div>
        <div className="w-full h-screen overflow-y-auto p-5">
          <Outlet />
        </div>
        
      </div>
    </div>
  );
}
