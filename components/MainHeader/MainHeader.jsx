"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import { GiHamburgerMenu } from "react-icons/gi"; // Import hamburger icon (can use any icon library)

export default function MainHeader() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="absolute flex w-full items-center justify-between">
      {/* App Title */}
      <h1 className="ml-2 cursor-pointer text-5xl font-bold text-customGreen01">
        {path === "/login" ? "" : "Pally"}
      </h1>

      {/* Hamburger button on small screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-4xl">
          <GiHamburgerMenu />
        </button>
      </div>

      {/* NavBar - Hidden on small screens, visible on medium and up */}
      <NavBar menuOpen={menuOpen} />
    </header>
  );
}
