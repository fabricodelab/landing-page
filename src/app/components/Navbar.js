import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex items-center fixed bg-transparent justify-between px-8 z-30">
      <Image src="/logo.png" alt="logo" width={143} height={32} className="" />
      <ul className="flex items-center gap-4 text-sm">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Team</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
