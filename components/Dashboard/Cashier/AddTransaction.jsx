"use client";

import CustomerStreak from "./CustomerStreak";
import SelectedServices from "./SelectedServices";
import Button from "@/components/Form/Button";
import { useRef, useState } from "react";
import ServiceDropDown from "./ServiceDropDown";
import CustomerSearchInput from "./CustomerSearchInput";
import CashierSelectInput from "./CashierSelectInput";

import { getCustomerSuggestions } from "@/lib/actions";
import VoucherInput from "./VoucherInput";
import { useDispatch, useSelector } from "react-redux";
import { transactionActions } from "@/components/Redux/TransactionSlice";

export default function AddTransaction({
  visibility,
  branches,
  services,
  methods,
}) {
  const [transactionDetails, setDetails] = useState({
    customerName: "",
    streak: "",
    streakDiscount: 0,
    branch: "",
    services: [],
    voucher: "",
    voucherDiscount: 0,
    payment: "",
    totalDiscount: 0,
    total: 0,
  });

  const availedServices = useSelector(
    (state) => state.transaction.selectedServices,
  );

  const dispatch = useDispatch();

  const dialogRef = useRef();
  const [availableServices, setAvailableServices] = useState([]);

  function dialogClose() {
    visibility();
    dialogRef.current.close();
  }

  function handleTransactionDetailsChanges(event) {
    const { name, value } = event.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleBranchChange(event) {
    const { value } = event.target;
    const foundServices = services.filter(
      (service) => service.branchID === value,
    );
    dispatch(transactionActions.branchChange(event.target.value));

    setAvailableServices(foundServices);
  }

  function handleMethodChange(event) {
    const { value } = event.target;
    dispatch(transactionActions.paymentMethodChange(value));
  }

  const totalAmount = transactionDetails.services.reduce(
    (acc, service) => acc + service.price * service.quantity,
    0,
  );

  const totalDiscount =
    transactionDetails.streakDiscount + transactionDetails.voucherDiscount;

  const finalTotal = totalAmount - totalDiscount;

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

          <div className="mt-10 flex justify-evenly">
            <div className="w-[30%]">
              <CashierSelectInput
                label={"Branch"}
                data={branches}
                fn={handleBranchChange}
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
          <div className="my-2 flex justify-evenly">
            <div className="w-[30%]">
              <VoucherInput setDetails={setDetails} totalAmount={totalAmount} />
            </div>
            <div className="w-[60%]">
              <CashierSelectInput
                label={"Payment Method"}
                data={methods}
                fn={handleMethodChange}
              />
            </div>
          </div>

          <div className="max-h-[40%] min-h-[40%]">
            <p>availed</p>
            <div className="max-h-[200px] overflow-y-auto rounded-md bg-customBGlightGreen">
              {availedServices.length === 0 && (
                <h1 className="py-4 text-center">Please select services</h1>
              )}
              {availedServices.length !== 0 &&
                availedServices.map((service) => (
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
              <p>P{totalDiscount}</p>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <p>P{finalTotal}</p>
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
