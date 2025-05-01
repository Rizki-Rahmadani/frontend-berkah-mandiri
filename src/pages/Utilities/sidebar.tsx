import {
  LayoutDashboardIcon,
  ListTreeIcon,
  LogOut,
  PersonStandingIcon,
  Settings,
  ShoppingCart,
} from "lucide-react";

export const Sidebar = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div
      onClick={onClose}
      className="flex flex-col gap-5 bg-[#66A5AD] shadow-lg sticky p-5 px-5 lg:h-[85vh] h-screen"
    >
      <div className="flex flex-col justify-between w-full h-full font-semibold items-start">
        <div className="flex flex-col w-full">
          <div className="flex gap-3 w-full cursor-pointer  hover:bg-[#C4DFE6] text-[#C4DFE6] hover:text-[#66A5AD] p-2 rounded-md transition-all duration-200 ease-in-out">
            <LayoutDashboardIcon />
            <p>Dashboard</p>
          </div>
          <div className="flex gap-3 w-full cursor-pointer  hover:bg-[#C4DFE6] text-[#C4DFE6] hover:text-[#66A5AD] p-2 rounded-md transition-all duration-200 ease-in-out">
            <ShoppingCart />
            <p>Pembelian Barang</p>
          </div>
          <div className="flex gap-3 w-full cursor-pointer  hover:bg-[#C4DFE6] text-[#C4DFE6] hover:text-[#66A5AD] p-2 rounded-md transition-all duration-200 ease-in-out">
            <PersonStandingIcon />
            <p>Pelanggan</p>
          </div>
          <div className="flex gap-3 w-full cursor-pointer  hover:bg-[#C4DFE6] text-[#C4DFE6] hover:text-[#66A5AD] p-2 rounded-md transition-all duration-200 ease-in-out">
            <ListTreeIcon />
            <p>Riwayat</p>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex gap-3 w-full cursor-pointer  hover:bg-[#C4DFE6] text-[#C4DFE6] hover:text-[#66A5AD] p-2 rounded-md transition-all duration-200 ease-in-out">
            <Settings />
            <p>Pengaturan </p>
          </div>
          <div className="flex gap-3 w-full cursor-pointer  hover:bg-[#C4DFE6] text-[#C4DFE6] hover:text-[#66A5AD] p-2 rounded-md transition-all duration-200 ease-in-out">
            <LogOut />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};
