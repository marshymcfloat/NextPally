"use client";

import BlockInfo from "@/components/DataGraph/BlockInfo";
import SideBar from "../SideBar/SideBar";
import InputGroup from "@/components/Form/InputGroup";
import SelectGroup from "@/components/Form/SelectGroup";
import { useState } from "react";

export default function CashierDashBoard() {
  const [list, setList] = useState([
    {
      id: "bf01",
      name: "Canoy, Daniel",
      date: "15/05/24",
      time: "13:45",
      status: "paid",
    },
    {
      id: "bf02",
      name: "Canoy, Daylinda",
      date: "22/05/24",
      time: "14:00",
      status: "ongoing",
    },
  ]);

  return (
    <>
      <SideBar />
      <main className="mx-4 my-4 h-[95%] w-screen rounded-xl border-[3px] border-customGreen01 px-2 py-2">
        <div className="text-end">
          <p className="text-sm tracking-wider text-customGreen01">
            Hi, Ara...
          </p>
        </div>
        <div id="userDataContainer" className="flex justify-evenly">
          <BlockInfo
            count={12}
            description={"No. of transactions you did today."}
          />

          <BlockInfo
            count={6}
            description={"No. of transactions that are  ongoing."}
            invert={true}
          />
        </div>

        <div id="transactionsContainer " className="h-[65%]">
          <p>previous transactions</p>
          <div className="h-[95%] rounded-lg border-[3px] border-customGreen01 py-2">
            <div className="mb-4 flex w-[50%] justify-evenly">
              <select name="" id="" className="">
                <option value="">today</option>
                <option value="">yesterday</option>
                <option value="">last 7 days</option>
              </select>

              <select name="" id="">
                <option value="">cash</option>
                <option value="">gcash</option>
                <option value="">bank</option>
              </select>
            </div>

            <div className="text-customGreen01">
              <ul>
                {list &&
                  list.map((transaction, index) => (
                    <li key={transaction.id}>
                      <div
                        className={
                          index & (2 === 0) || index === 0
                            ? "mx-1 my-1 flex justify-around border-[3px] border-customGreen01 bg-customGreen01 text-customBGColor"
                            : "mx-1 my-1 flex justify-around border-[3px] border-customGreen01 bg-customBGColor"
                        }
                      >
                        <div className="w-[150px]">
                          <p>{transaction.name}</p>
                        </div>
                        <div>
                          <p>{transaction.date}</p>
                        </div>
                        <div>
                          <p>{transaction.time}</p>
                        </div>
                        <div className="w-[70px] text-center">
                          <p>{transaction.status}</p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="flex h-[10%] items-center justify-end">
            <button className="rounded-md border border-customGreen01 bg-customGreen01 px-4 py-2 uppercase text-customBGColor">
              new transaction
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
