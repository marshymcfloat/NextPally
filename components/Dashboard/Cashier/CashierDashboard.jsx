"use client";

import BlockInfo from "@/components/DataGraph/BlockInfo";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";
import AddTransaction from "./AddTransaction";

export default function CashierDashBoard({
  services,
  branches,
  methods,
  accountID,
  transactions,
}) {
  console.log(transactions);

  const [dialogVisibility, setDialogVisibility] = useState(false);

  const availableServices = services.flat();
  const availableBranches = branches;
  const availableMethods = methods;

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

  function handleDialogVisibility() {
    setDialogVisibility((prevState) => !prevState);
  }
  return (
    <>
      <SideBar />
      <main className="mx-auto my-auto h-[95%] w-screen rounded-xl border-[3px] border-customGreen01 px-2 py-2 md:mx-4">
        <div className="h-[30%]">
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
                {transactions.length !== 0 ? (
                  transactions.map((transaction, index) => {
                    return (
                      <li key={transaction._id}>
                        <div
                          className={
                            index % 2 === 0 || index === 0
                              ? "mx-1 my-1 flex justify-around border-[3px] border-customGreen01 bg-customGreen01 text-customBGColor"
                              : "mx-1 my-1 flex justify-around border-[3px] border-customGreen01 bg-customBGColor"
                          }
                        >
                          <div className="w-[150px]">
                            <p className="max-w-[150px] truncate">
                              {transaction.name}
                            </p>
                          </div>
                          <div>
                            <p>{transaction.date}</p>{" "}
                          </div>
                          <div>
                            <p>{transaction.time}</p>{" "}
                          </div>
                          <div className="w-[70px] text-center">
                            <p>{transaction.status}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })
                ) : (
                  <p className="my-16 h-full px-8 text-center text-2xl uppercase">
                    no transactions yet. (this should be fixed)
                  </p>
                )}
              </ul>
            </div>
          </div>
          <div className="flex h-[10%] items-center justify-end">
            <button
              className="rounded-md border border-customGreen01 bg-customGreen01 px-4 py-2 uppercase text-customBGColor"
              onClick={handleDialogVisibility}
            >
              new transaction
            </button>
          </div>
        </div>
      </main>
      {dialogVisibility && (
        <AddTransaction
          visibility={handleDialogVisibility}
          branches={availableBranches}
          services={availableServices}
          methods={availableMethods}
        />
      )}
    </>
  );
}
