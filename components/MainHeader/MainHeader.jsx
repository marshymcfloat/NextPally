'use client'

import NavBar from "./NavBar";
import { usePathname } from "next/navigation";
export default function MainHeader() {
  const path = usePathname()

  return (
    <header className="flex w-full justify-between  absolute  ">
      <h1 className="text-5xl font-bold ml-2 cursor-pointer text-customGreen01">
        {path === '/login' ? '' : 'Pally'} 
      </h1>
      <NavBar />
    </header>
  );
}
