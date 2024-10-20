"use client";

import DashboardInputGroup from "../DashboardInputGroup";
import CashierSelectInput from "./cashierSelectInput";
import CustomerStreak from "./CustomerStreak";
import { useRef } from "react";
export default function AddTransaction() {
  const dialogRef = useRef();

  function dialogClose() {
    dialogRef.current.close();
  }

  const branches = [
    { id: "bf01", name: "bfo1" },
    { id: "bf02", name: "bf02" },
    { id: "bf03", name: "bf03" },
  ];

  const services = [
    { name: "manicure pedicure", id: "mp01" },
    { name: "massage 101", id: "msg01" },
    { name: "massage 102", id: "msg02" },
  ];
  return (
    <dialog
      open
      className="backdz absolute mx-auto my-10 h-[90%] w-[95%] rounded-lg border-[3px] border-customGreen01 px-4 py-4"
      ref={dialogRef}
    >
      <button
        className="absolute right-2 top-0 rotate-45 text-4xl"
        onClick={dialogClose}
      >
        +
      </button>
      <h1 className="text-center text-2xl tracking-widest">BeautyFeel</h1>

      <form action="">
        <DashboardInputGroup label={"customer name"} />
        <CustomerStreak />
        <div className="flex justify-evenly">
          <CashierSelectInput label="branches" options={branches} />
          <CashierSelectInput label="services" options={services} />
        </div>
      </form>
    </dialog>
  );
}
