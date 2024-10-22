"use client";

import DashboardInputGroup from "../DashboardInputGroup";
import CashierSelectInput from "./cashierSelectInput";
import CustomerStreak from "./CustomerStreak";
import SelectedServices from "./SelectedServices";
import Button from "@/components/Form/Button";
import { useRef } from "react";

export default function AddTransaction({
  visibility,
  transactionDetails,
  setDetails,
}) {
  const dialogRef = useRef();

  function dialogClose() {
    visibility();
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

  const paymentModes = [
    { name: "Gcash", id: "pmd01" },
    { name: "Bank", id: "pm02" },
    { name: "Cash", id: "pm03" },
  ];

  function handleTransactionDetailsChanges(event) {
    const { name, value } = event.target;

    console.log(transactionDetails);
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <dialog
        open
        className="backdz mx-auto h-[90%] w-[95%] rounded-lg border-[3px] border-customGreen01 bg-customBGColor px-4 py-4"
        ref={dialogRef}
      >
        <button
          className="absolute right-2 top-0 rotate-45 text-4xl"
          onClick={dialogClose}
        >
          +
        </button>
        <h1 className="text-center text-2xl tracking-widest">BeautyFeel</h1>

        <form action="" className="h-[95%]">
          <div className="my-4 flex flex-col">
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              name="customerName"
              className="h-[40px] rounded-md border-[2px] border-customGreen01 px-2"
              value={transactionDetails.customerName}
              onChange={handleTransactionDetailsChanges}
            />
          </div>
          <CustomerStreak />
          <div className="flex justify-around">
            <CashierSelectInput label="branches" options={branches} />
            <CashierSelectInput label="services" options={services} />
          </div>
          <div className="flex justify-around">
            <div className="mx-4 flex flex-col">
              <label htmlFor="">voucher</label>
              <input
                type="text"
                className="w-[100px] border-[2px] border-customGreen01 px-2"
              />
            </div>
            <CashierSelectInput
              label={"mode of payment"}
              options={paymentModes}
            />
          </div>

          <div className="max-h-[40%] min-h-[40%] overflow-y-auto">
            <p>availed</p>
            <div className="rounded-md bg-customBGlightGreen">
              <SelectedServices
                name="manicure pedicure 02"
                branch={"bf01"}
                value={399}
                quantity={2}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <p>sub total:</p>
              <p>P1,297</p>
            </div>
            <div className="flex justify-between">
              <p>discount</p>
              <p>-P100</p>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <p>P2,233</p>
            </div>
          </div>
          <div className="mt-6 flex justify-evenly">
            <Button invert={true} onClick={dialogClose}>
              Cancel
            </Button>
            <Button>Confirm</Button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
