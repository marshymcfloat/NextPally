"use client";

import DashboardInputGroup from "../DashboardInputGroup";
import CashierSelectInput from "./cashierSelectInput";
import CustomerStreak from "./CustomerStreak";
import SelectedServices from "./SelectedServices";
import Button from "@/components/Form/Button";
import { useRef, useState } from "react";

import { getCustomerSuggestions } from "@/lib/actions";

export default function AddTransaction({
  visibility,
  transactionDetails,
  setDetails,
  branches,
  services,
  methods,
}) {
  const dialogRef = useRef();
  const [availableServices, setAvailableServices] = useState([]);

  function dialogClose() {
    visibility();
    dialogRef.current.close();
  }

  /*   function handleTransactionDetailsChanges(event) {
    const { name, value } = event.target;

    console.log(transactionDetails);
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  } */

  function branchHandleChange(event) {
    const selectedBranchID = event.target.value;
    const foundServices = services.filter(
      (service) => service.branchID === selectedBranchID,
    );

    setAvailableServices(foundServices);
  }

  function handleCustomerSearch(event) {
    getCustomerSuggestions(event.target.value);
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
          <div className="flex flex-col">
            <label
              htmlFor="customername"
              className="lowercase text-customGreen01"
            >
              Customer name
            </label>
            <input
              type="text"
              id="customername"
              name="customername"
              className="h-12 rounded-md border-[3px] border-customGreen01 px-2"
            />
          </div>

          <CustomerStreak />

          <div className="my-2 flex justify-evenly">
            <div className="w-[30%]">
              <div className="flex flex-col">
                <label htmlFor="branch" className="text-customGreen01">
                  branch
                </label>
                <select
                  className="max-w-[100px] overflow-hidden truncate rounded-md border-[3px] border-customGreen01 px-1 py-1"
                  name="branch"
                  id="branch"
                  onChange={branchHandleChange}
                >
                  <option value="">select branch</option>
                  {branches.map((branch) => (
                    <option value={branch._id} key={branch._id} id={branch._id}>
                      {branch.branchName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-[60%]">
              <div className="flex flex-col">
                <label htmlFor="services" className="text-customGreen01">
                  Services
                </label>
                <div className="overflow-y-scroll truncate rounded-md border-[3px] border-customGreen01 px-1 py-1">
                  {availableServices.map((service) => (
                    <div key={service._id} className="">
                      <input
                        value={service.name}
                        id={service._id}
                        name="services"
                        type="checkbox"
                        className="hidden"
                      />
                      <label htmlFor={service._id}>{service.name}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="w-[30%]">
              <div className="flex flex-col">
                <label htmlFor="" className="text-customGreen01">
                  voucher
                </label>
                <input
                  type="text"
                  className="max-w-[100px] rounded-md border-[3px] border-customGreen01 px-2 py-1"
                />
              </div>
            </div>
            <div className="w-[60%]">
              <div className="flex flex-col">
                <label htmlFor="branch" className="text-customGreen01">
                  payment methods
                </label>
                <select
                  className="max-w-[100px] overflow-hidden truncate rounded-md border-[3px] border-customGreen01 px-1 py-1"
                  name="branch"
                  id="branch"
                >
                  <option value="">select method</option>
                  {methods.map((method) => (
                    <option
                      value={method.paymentName}
                      key={method._id}
                      id={method._id}
                    >
                      {method.paymentName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
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
