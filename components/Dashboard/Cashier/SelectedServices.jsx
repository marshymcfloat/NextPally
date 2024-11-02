"use client";

import { transactionActions } from "@/components/Redux/TransactionSlice";
import { useSelector, useDispatch } from "react-redux";

export default function SelectedServices({ name, value, setDetails }) {
  const dispatch = useDispatch();

  const transactionDetails = useSelector((state) => state.transaction);

  const quantity = useSelector((state) => {
    const services = state.transaction.selectedServices;

    const serviceQuantity = services.find((service) => service.name === name);
    return serviceQuantity.quantity;
  });

  const total = quantity * value;

  function handleQuantityChange(identifier, name) {
    dispatch(transactionActions.modifyServiceQuantity({ identifier, name }));
  }

  return (
    <div className="my-2 flex items-center justify-between px-2">
      <div className="flex w-[70%] items-center justify-between">
        <p className="flex min-w-[25px] items-center md:min-w-[5%]">
          x{quantity}
        </p>
        <div className="flex flex-col justify-center">
          <p className="text-md w-[250px]">{name}</p>
          <div className="flex w-[50%] justify-between text-xs">
            <p>P{value}</p>
          </div>
        </div>
      </div>
      <div className="flex w-[30%] items-center justify-around">
        <div className="flex w-[50%] items-center justify-around">
          <button
            type="button"
            className="flex h-[25px] w-[25px] items-center justify-center rounded-md border-[2px] border-customGreen01"
            onClick={() => handleQuantityChange("dec", name)}
          >
            -
          </button>
          <button
            type="button"
            className="flex h-[25px] w-[25px] items-center justify-center rounded-md border-[2px] border-customGreen01 bg-customGreen01 text-customBGColor"
            onClick={() => handleQuantityChange("inc", name)}
          >
            +
          </button>
        </div>
        <p className="flex min-w-[60px] justify-center">P{total}</p>
      </div>
    </div>
  );
}

/* function handleQuantityChange(identifier) {
    setDetails((prevState) => {
      const newServices = prevState.services
        .map((service) =>
          service.name === name
            ? {
                ...service,
                quantity:
                  identifier === "inc"
                    ? service.quantity + 1
                    : service.quantity - 1,
              }
            : service,
        )
        .filter((service) => service.quantity > 0);

      return {
        ...prevState,
        services: newServices,
      };
    });
  } */
