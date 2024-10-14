"use client";

import { useState } from "react";

export default function SideBar({ title }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(!isOpen); // Toggle sidebar state
  }

  return (
    <>
      <div
        className={`absolute bottom-[-10px] left-[-10px] h-screen w-[20%] min-w-[300px] transform rounded-tr-2xl border-[5px] border-customGreen01 bg-customBGColor bg-opacity-5 px-4 backdrop-blur-md transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        id="slider-button"
      >
        <h1 className="mt-2 text-center text-4xl font-bold">
          {title || "Beautyfeel"}
        </h1>
        <div
          className="absolute bottom-[50%] right-[-30px] top-[50%] flex h-[90px] w-[30px] cursor-pointer items-center justify-evenly rounded-br-xl rounded-tr-xl bg-customGreen01"
          onClick={handleClick}
        >
          <div className="h-[60%] w-[4px] bg-customBGColor"></div>
          <div className="h-[60%] w-[4px] bg-customBGColor"></div>
        </div>
        <div className="ml-[10px] h-[90%] rounded-xl bg-customDarkerGreen">
          <ul className="px-4 py-4">
            <li className="flex h-[35px] items-center rounded-xl bg-customCashGreen px-4 text-lg font-bold uppercase tracking-widest">
              home
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
