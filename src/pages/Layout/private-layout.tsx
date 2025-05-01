import { Outlet } from "react-router";
import { Navbar } from "../Utilities/navbar";
import { Sidebar } from "../Utilities/sidebar";

export function PrivateLayout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex ">
        <div className="hidden lg:block w-[20%]">
          <Sidebar />
        </div>
        <div className="lg:w-[80%] w-full h-screen overflow-y-auto p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
