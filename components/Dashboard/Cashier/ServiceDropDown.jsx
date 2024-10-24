"use client";

import { useState } from "react";

export default function ServiceDropDown({ services }) {
  const [isArrowFlipped, setIsArrowFlipped] = useState(false);

  function handleFlippingArrow() {
    setIsArrowFlipped((prevState) => !prevState);
  }

  return (
    <div className="relative flex h-[36px] w-[200px] rounded-md border-[3px] border-customGreen01">
      <div className="flex w-[85%] items-center px-1">Select services</div>
      <div
        className="flex h-[100%] w-[15%] items-center justify-center font-bold"
        onClick={handleFlippingArrow}
      >
        <img
          src="/images/dropdown-arrow.png"
          alt="dropdown-arrow"
          className={
            isArrowFlipped
              ? "w-[15px] rotate-[60deg] transition-all duration-200"
              : "w-[15px] transition-all duration-200"
          }
        />
      </div>
      <div
        className={
          isArrowFlipped
            ? "scrollbar-thin scrollbar-thumb-customGreen01 scrollbar-track-customBGColor absolute left-[-1.5%] top-[100%] max-h-[200px] w-[103%] overflow-y-auto rounded-b-md border-[3px] border-t-0 border-customGreen01 bg-customBGColor py-1 opacity-100 transition-all duration-200"
            : "absolute left-[-1.5%] top-[100%] max-h-0 w-[103%] overflow-hidden overflow-y-auto rounded-b-md border-[3px] border-t-0 border-customGreen01 py-1 opacity-0 transition-all duration-200"
        }
      >
        <ul>
          {services.map((service) => (
            <li
              className="mx-1 border-b-[2px] border-customGreen01"
              key={service._id}
            >
              <input
                type="checkbox"
                name="services"
                id={service.name}
                className="hidden"
              />
              <label htmlFor={service.name}>{service.name}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
