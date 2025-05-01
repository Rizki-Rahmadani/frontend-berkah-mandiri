import { HamburgerButton } from "@/components/hamburger-button";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#66A5AD] border-b-2 border-slate-100 sticky w-full h-[15vh] px-10">
      <p className="text-3xl font-extrabold text-[#C4DFE6]">__Logo.</p>
      <div>
        <div className="hidden lg:flex items-center gap-3 font-semibold">
          <img
            src="https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
          <p>Rizki R.</p>
        </div>
        <div>
          <HamburgerButton />
        </div>
      </div>
    </div>
  );
};
