import { Sidebar } from "@/pages/Utilities/sidebar";
import { CrossIcon, Menu } from "lucide-react";
import { useState } from "react";

export const HamburgerButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="lg:hidden flex items-center justify-center w-10 h-10 text-primary cursor-pointer transition-all duration-200 ease-in-out">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CrossIcon /> : <Menu size={35} />}
        </button>
      </div>
      {isMenuOpen && (
        <div>
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50"
          ></div>
          {/* <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed top-2 lg:right-20 left-36 z-50 flex items-center justify-center w-10 h-10 text-[#2C3639] bg-[#DCD7C9] rounded-full cursor-pointer transition-all duration-200 ease-in-out lg:hidden"
          >
            <CrossIcon />
          </div> */}
          <div className="fixed top-0 left-0">
            <Sidebar onClose={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};
