import { Outlet } from "react-router";
import { Navbar } from "../Utilities/navbar";
import { Sidebar } from "../Utilities/sidebar";

export function PrivateLayout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="hidden lg:block w-[20%]">
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
