import {
  LayoutDashboardIcon,
  ListTreeIcon,
  LogOut,
  PersonStandingIcon,
  Settings,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Package,
} from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export const Sidebar = ({ onClose }: { onClose?: () => void }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      onClick={onClose}
      className={`flex flex-col gap-5 bg-slate-300 shadow-lg sticky p-5 px-5 h-screen transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-56"
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-9 bg-[#DCD7C9] rounded-full p-1.5 cursor-pointer hover:bg-[#A27B5C]"
      >
        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      <div className="flex flex-col justify-between w-full h-full font-medium items-start">
        <div className="space-y-2">
          <div className="flex items-center gap-5 py-5 border-b-2 border-slate-200">
            <img src="/avatar.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
            {!isCollapsed && 
            <div>
              <p className="text-sm font-bold tracking-wide">Rizki Rahmadani</p>
              <p className="text-xs font-medium text-gray-500">Admin</p>
            </div>
            }
          </div>
          <div className="flex flex-col w-full gap-3">
            <Link to={"/"}>
              <div className="flex gap-3 w-full cursor-pointer hover:bg-slate-200 text-primary hover:text-[#2C3639] p-2 rounded-md transition-all duration-200 ease-in-out">
                <LayoutDashboardIcon />
                {!isCollapsed && <p className="font-medium tracking-wide text-[15px]">Dashboard</p>}
              </div>
            </Link>


            <Link to={"/pelanggan"}>
              <div className="flex gap-3 w-full cursor-pointer hover:bg-slate-200 text-primary hover:text-[#2C3639] p-2 rounded-md transition-all duration-200 ease-in-out">
                <PersonStandingIcon />
                {!isCollapsed && <p className="font-medium tracking-wide text-[15px]">Pelanggan</p>}
              </div>
            </Link>

            <Link to={"/barang"}>
              <div className="flex gap-3 w-full cursor-pointer hover:bg-slate-200 text-primary hover:text-[#2C3639] p-2 rounded-md transition-all duration-200 ease-in-out">
                <Package />
                {!isCollapsed && <p className="font-medium tracking-wide text-[15px]">Barang</p>}
              </div>
            </Link>
            
            <Link to={"/pembelian-barang"}>
              <div className="flex gap-3 w-full cursor-pointer hover:bg-slate-200 text-primary hover:text-[#2C3639] p-2 rounded-md transition-all duration-200 ease-in-out">
                <ShoppingCart />
                {!isCollapsed && <p className="font-medium tracking-wide text-[15px]">Pembelian Barang</p>}
              </div>
            </Link>

            <Link to={"/riwayat-transaksi"}>
              <div className="flex gap-3 w-full cursor-pointer hover:bg-slate-200 text-primary hover:text-[#2C3639] p-2 rounded-md transition-all duration-200 ease-in-out">
                <ListTreeIcon />
                {!isCollapsed && <p className="font-medium tracking-wide text-[15px]">Riwayat</p>}
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full gap-3">
          <Link to={"Pengaturan"}>
            <div className="flex gap-3 w-full cursor-pointer hover:bg-slate-200 text-primary hover:text-[#2C3639] p-2 rounded-md transition-all duration-200 ease-in-out">
              <Settings />
              {!isCollapsed && <p className="font-medium tracking-wide text-[15px]">Pengaturan</p>}
            </div>
          </Link>
          <Link to={"/logout"}>
            <div className="flex gap-3 w-full cursor-pointer hover:bg-slate-200 text-red-700 hover:text-[#2C3639] p-2 rounded-md transition-all duration-200 ease-in-out">
              <LogOut />
              {!isCollapsed && <p className="font-medium tracking-wide text-[15px]">Logout</p>}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
