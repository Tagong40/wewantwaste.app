import { Menu, Phone } from "lucide-react";

export const Header = () => (
  <header className="flex items-center justify-between py-5 px-8 border-b border-gray-200">
    <button className="flex items-center gap-2.5 text-sm font-medium tracking-widest text-gray-800">
      <Menu size={24} />
      MENU
    </button>

    {/* Hide "Available skips" on small screens, show from md and up */}
    <div className="text-3xl font-bold text-[#2d7a5b] hidden md:block">
      Available skips
    </div>

    <div className="flex items-center gap-6 text-sm">
      {/* Hide phone number on small screens, show from md and up */}
      <a
        href="tel:618770505"
        className="flex items-center gap-2 text-gray-800  md:flex"
      >
        <Phone size={16} className="text-[#2d7a5b]" />
        <span>61 877 05 05</span>
      </a>

      <button className="font-medium text-gray-800">PL</button>
    </div>
  </header>
);
