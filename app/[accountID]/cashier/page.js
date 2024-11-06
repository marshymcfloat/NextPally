"use client";

import BlockInfo from "@/components/DataGraph/BlockInfo";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
export default function CashierPage({}) {
  const route = useRouter();

  const { accountID } = useParams();
  const [cashierData, setCashierData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [dialogVisibility, setDialogVisibility] = useState(false);
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    fetch(`/api/${accountID}/cashier`)
      .then((response) => {
        if (!response.ok) throw new Error("Error fetching cashier data");
        return response.json();
      })
      .then((data) => {
        if (data.message === "Successful") {
          console.log("meow");
          setTransactions(data.transactions);
        }
      })
      .catch((error) => setFetchError(error.message));
  }, []);
  console.log(transactions);
  function handleDialogVisibility() {
    setDialogVisibility((prevState) => !prevState);
  }

  return (
    <>
      <main className="mx-auto my-auto h-[95%] w-screen overflow-hidden rounded-xl border-[3px] border-customGreen01 px-2 py-2 md:mx-4">
        <div className="h-[30%]">
          <div className="flex justify-between">
            <div
              onClick={() => {
                route.back();
              }}
            >
              <img
                src={"/images/dashboard-icons/back-icon.png"}
                className="h-4 cursor-pointer"
              />
            </div>
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
              description={"No. of transactions that are ongoing."}
              invert={true}
            />
          </div>
        </div>

        <div id="transactionsContainer" className="h-[65%]">
          <p>previous transactions</p>
          <div className="h-[95%] rounded-lg border-[3px] border-customGreen01 py-2">
            <div className="mb-4 flex w-[50%] justify-evenly">
              <select name="date" id="date-select">
                <option value="today">today</option>
                <option value="yesterday">yesterday</option>
                <option value="last7">last 7 days</option>
              </select>
              <select name="payment-method" id="payment-method-select">
                <option value="cash">cash</option>
                <option value="gcash">gcash</option>
                <option value="bank">bank</option>
              </select>
            </div>

            <div className="text-customGreen01">
              {transactions !== null && transactions.length !== 0 ? (
                <ul>
                  {transactions.map((transaction, index) => (
                    <li key={transaction._id}>
                      <div
                        className={
                          index % 2 === 0
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
              ) : (
                <p className="my-16 h-full px-8 text-center text-2xl uppercase">
                  no transactions yet.
                </p>
              )}
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
    </>
  );
}
/*   const availableServices = services.flat();
  const availableBranches = branches;
  const availableMethods = methods;
 */
{
  /* {transactions.length !== 0 ? (
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
                )} */
}
