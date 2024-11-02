"use client";

import { useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { transactionActions } from "@/components/Redux/TransactionSlice";
import { useMutation } from "@tanstack/react-query";
import CustomerStreak from "./CustomerStreak";
import SelectedServices from "./SelectedServices";
import Button from "@/components/Form/Button";
import ServiceDropDown from "./ServiceDropDown";
import CustomerSearchInput from "./CustomerSearchInput";
import CashierSelectInput from "./CashierSelectInput";
import VoucherInput from "./VoucherInput";
import Spinner from "@/components/Indicators/Spinner";

export default function AddTransaction({
  visibility,
  branches,
  services,
  methods,
}) {
  const [availableServices, setAvailableServices] = useState([]);
  const dialogRef = useRef();
  const dispatch = useDispatch();
  const { accountID } = useParams();

  const transactionDetails = useSelector((state) => state.transaction);
  const subTotal = useSelector((state) => state.transaction.subTotal);
  const totalDiscount = useSelector((state) => state.transaction.totalDiscount);
  const grandTotal = useSelector((state) => state.transaction.grandTotal);
  const availedServices = useSelector(
    (state) => state.transaction.selectedServices,
  );

  function dialogClose() {
    dispatch(transactionActions.resetTransaction());
    visibility();
    dialogRef.current.close();
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

  async function postFetching() {
    const response = await fetch(`/api/${accountID}/dashboard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionDetails),
    });

    if (!response.ok) {
      const errorData = await response.json();

      throw errorData.errors;
    }

    return await response.json();
  }

  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: "add-transaction",
    mutationFn: postFetching,
    onSuccess: dialogClose,
  });

  async function handleFormSubmitting(event) {
    event.preventDefault();
    mutate();
  }
  if (isError) {
    error.map((err) => {
      console.log(err);
    });
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <dialog
        open
        className="backdz mx-auto h-[90%] w-[95%] overflow-y-auto overflow-x-hidden rounded-lg border-[3px] border-customGreen01 bg-customBGColor px-4 py-4"
        ref={dialogRef}
      >
        <button
          className="absolute right-2 top-0 rotate-45 text-4xl"
          onClick={dialogClose}
        >
          +
        </button>
        <h1 className="text-center text-2xl tracking-widest">BeautyFeel</h1>

        <form
          action=""
          className="h-[95%]"
          onSubmit={handleFormSubmitting}
          autoComplete="off"
        >
          <CustomerSearchInput />

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
              <ServiceDropDown services={availableServices} />
            </div>
          </div>
          <div className="my-2 flex justify-evenly">
            <div className="w-[30%]">
              <VoucherInput />
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
                    value={service.price}
                    quantity={service.quantity}
                  />
                ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <p>Sub Total:</p>
              <p>P{subTotal}</p>
            </div>
            <div className="flex justify-between">
              <p>Discount</p>
              <p>P{totalDiscount}</p>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <p>P{grandTotal}</p>
            </div>
          </div>
          <div className="mt-6 flex justify-evenly">
            <Button invert={true} onClick={dialogClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isPending || availedServices.length === 0}
            >
              {isPending ? "Wait..." : "Confirm"}
            </Button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
