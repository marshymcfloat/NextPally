"use client";

import NavBar from "./NavBar";
import { usePathname } from "next/navigation";
export default function MainHeader() {
  const path = usePathname();

  return (
    <header className="absolute flex w-full justify-between">
      <h1 className="ml-2 cursor-pointer text-5xl font-bold text-customGreen01">
        {path === "/login" ? "" : "Pally"}
      </h1>
      <NavBar />
    </header>
  );
}
