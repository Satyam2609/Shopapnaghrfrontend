"use client";
import Image from "next/image";

export default function ProductNavbar() {
  return (
    <nav className="w-full bg-black shadow-xl py-4">
      <div className="flex items-center justify-around px-6">
        {/* Left Section (Logo / Title) */}
        <div className="flex items-center space-x-2">
          {/* Optional Image */}
          {/* <Image src="/logo.png" alt="Logo" width={40} height={40} /> */}
          <h1 className="text-3xl text-white font-extrabold">
            Cloth<span className="text-orange-400 text-lg">s</span>
          </h1>
        </div>

        {/* Center Section (Search Bar) */}
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full h-10 rounded-2xl px-4 outline-none border border-gray-400 bg-white text-black placeholder-gray-500"
          />
        </div>

        {/* Right Section (Menu Items) */}
        <ul className="flex text-white font-semibold text-lg gap-10">
          <li className="hover:text-orange-400 cursor-pointer transition-all">Home</li>
          <li className="hover:text-orange-400 cursor-pointer transition-all">Woman</li>
          <li className="hover:text-orange-400 cursor-pointer transition-all">Man</li>
        </ul>
      </div>
    </nav>
  );
}
