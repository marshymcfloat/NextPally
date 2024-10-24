"use client";

import { useState } from "react";

export default function CustomerSearchInput() {
  const [searchSuggestionVisible, setSearchSuggestionVisible] = useState(false);

  return (
    <>
      <div className="relative flex flex-col">
        <label htmlFor="" className="text-customGreen01">
          customer name:
        </label>
        <input
          type="text"
          className="h-[50px] rounded-md border-[3px] border-customGreen01 px-2"
        />
        {searchSuggestionVisible && (
          <div className="absolute top-[100%] z-10 h-full w-full rounded-md border-[3px] border-t-0 border-customGreen01 bg-customBGColor pb-2">
            <ul>
              <li className="mx-2 my-2 border-b-2 border-customGreen01">
                Canoy, Daniel
              </li>
              <li className="mx-2 my-2 border-b-2 border-customGreen01">
                Canoy, Daniel
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
