"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function ProductNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-8 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl sm:text-3xl text-white font-extrabold">
            Cloth<span className="text-orange-400 text-lg">s</span>
          </h1>
        </div>

        {/* Search Bar (Hidden on mobile) */}
        <div className="hidden md:block w-full max-w-md mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full h-10 rounded-2xl px-4 outline-none border border-gray-400 bg-white text-black placeholder-gray-500"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-white font-semibold text-lg gap-8">
          <li className="hover:text-orange-400 cursor-pointer transition-all">Home</li>
          <li className="hover:text-orange-400 cursor-pointer transition-all">Woman</li>
          <li className="hover:text-orange-400 cursor-pointer transition-all">Man</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white font-semibold text-lg px-6 py-4 space-y-4 border-t border-gray-700">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-10 rounded-2xl px-4 outline-none border border-gray-400 bg-white text-black placeholder-gray-500"
            />
          </div>
          <ul className="flex flex-col gap-3">
            <li className="hover:text-orange-400 cursor-pointer transition-all">Home</li>
            <li className="hover:text-orange-400 cursor-pointer transition-all">Woman</li>
            <li className="hover:text-orange-400 cursor-pointer transition-all">Man</li>
          </ul>
        </div>
      )}
    </nav>
  );
}