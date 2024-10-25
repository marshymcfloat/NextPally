"use client";

import CustomerStreak from "./CustomerStreak";
import SelectedServices from "./SelectedServices";
import Button from "@/components/Form/Button";
import { useRef, useState } from "react";
import ServiceDropDown from "./ServiceDropDown";
import CustomerSearchInput from "./CustomerSearchInput";
import CashierSelectInput from "./CashierSelectInput";

import { getCustomerSuggestions } from "@/lib/actions";
import CashierTextInput from "./CashierTextInput";

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

  function handleTransactionDetailsChanges(event) {
    const { name, value } = event.target;
    console.log(transactionDetails);
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function branchHandleChange(event) {
    const { name, id, value } = event.target;
    const foundServices = services.filter(
      (service) => service.branchID === value,
    );
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setAvailableServices(foundServices);
  }

  function handleCustomerSearch(event) {
    getCustomerSuggestions(event.target.value);
  }

  const totalAmount = transactionDetails.services.reduce(
    (acc, service) => acc + service.price * service.quantity,
    0,
  );

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
          <CustomerSearchInput onChange={handleTransactionDetailsChanges} />

          <CustomerStreak />

          <div className="my-2 flex justify-evenly">
            <div className="w-[30%]">
              <CashierSelectInput
                label={"branch"}
                data={branches}
                fn={branchHandleChange}
              />
            </div>
            <div className="w-[60%]">
              <ServiceDropDown
                services={availableServices}
                transactionDetails={transactionDetails}
                setDetails={setDetails}
              />
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="w-[30%]">
              <CashierTextInput label={"voucher"} />
            </div>
            <div className="w-[60%]">
              <CashierSelectInput
                label={"payment method"}
                data={methods}
                fn={handleTransactionDetailsChanges}
              />
            </div>
          </div>

          <div className="max-h-[40%] min-h-[40%] overflow-y-auto">
            <p>availed</p>
            <div className="rounded-md bg-customBGlightGreen">
              {transactionDetails.services.length === 0 && (
                <h1 className="py-4 text-center">Please select services</h1>
              )}
              {transactionDetails.services.length !== 0 &&
                transactionDetails.services.map((service) => (
                  <SelectedServices
                    key={service.name}
                    name={service.name}
                    branch={"bf01"}
                    value={service.price}
                    quantity={service.quantity}
                    setDetails={setDetails}
                  />
                ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <p>sub total:</p>
              <p>P{totalAmount}</p>
            </div>
            <div className="flex justify-between">
              <p>discount</p>
              <p>-P100</p>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <p>P{totalAmount}</p>
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
