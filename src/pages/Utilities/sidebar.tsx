import {
  LayoutDashboardIcon,
  ListTreeIcon,
  LogOut,
  PersonStandingIcon,
  Settings,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router";

export const Sidebar = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div
      onClick={onClose}
      className="flex flex-col gap-5 bg-[#2C3639] shadow-lg sticky p-5 px-5 lg:h-[85vh] h-screen"
    >
      <div className="flex flex-col justify-between w-full h-full font-semibold items-start">
        <div className="flex flex-col w-full">
          <Link to={"/"}>
            <div className="flex gap-3 w-full cursor-pointer xl:text-lg md:text-sm hover:bg-[#DCD7C9] text-[#DCD7C9] hover:text-[#2C3639] p-2 rounded-md transition-all duration-200 ease-in-out">
              <LayoutDashboardIcon />
              <p>Dashboard</p>
            </div>
          </Link>

          <Link to={"/pembelian-barang"}>
            <div className="flex gap-3 w-full cursor-pointer xl:text-lg md:text-sm  hover:bg-[#DCD7C9] text-[#DCD7C9] hover:text-[#2C3639] p-2 rounded-md transition-all duration-200 ease-in-out">
              <ShoppingCart />
              <p>Pembelian Barang</p>
            </div>
          </Link>

          <Link to={"/pelanggan"}>
            <div className="flex gap-3 w-full cursor-pointer xl:text-lg md:text-sm  hover:bg-[#DCD7C9] text-[#DCD7C9] hover:text-[#2C3639] p-2 rounded-md transition-all duration-200 ease-in-out">
              <PersonStandingIcon />
              <p>Pelanggan</p>
            </div>
          </Link>

          <Link to={"/riwayat-transaksi"}>
            <div className="flex gap-3 w-full cursor-pointer xl:text-lg md:text-sm  hover:bg-[#DCD7C9] text-[#DCD7C9] hover:text-[#2C3639] p-2 rounded-md transition-all duration-200 ease-in-out">
              <ListTreeIcon />
              <p>Riwayat</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col w-full">
          <Link to={"Pengaturan"}>
            <div className="flex gap-3 w-full cursor-pointer xl:text-lg md:text-sm  hover:bg-[#DCD7C9] text-[#DCD7C9] hover:text-[#2C3639] p-2 rounded-md transition-all duration-200 ease-in-out">
              <Settings />
              <p>Pengaturan </p>
            </div>
          </Link>
          <Link to={"/logout"}>
            <div className="flex gap-3 w-full cursor-pointer xl:text-lg md:text-sm  hover:bg-[#DCD7C9] text-[#DCD7C9] hover:text-[#2C3639] p-2 rounded-md transition-all duration-200 ease-in-out">
              <LogOut />
              <p>Logout</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
