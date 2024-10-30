"use client";

import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transactionActions } from "@/components/Redux/TransactionSlice";
export default function ServiceDropDown({ services }) {
  const [isArrowFlipped, setIsArrowFlipped] = useState(false);
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const selectedServices = useSelector(
    (state) => state.transaction.selectedServices,
  );

  console.log(services);

  console.log(selectedServices);

  function handleFlippingArrow() {
    setIsArrowFlipped((prevState) => !prevState);
  }

  function handleAddingServices(event, price) {
    dispatch(
      transactionActions.modifyServices({
        name: event.target.value,
        quantity: 1,
        price,
      }),
    );
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsArrowFlipped(false);
    }
  };

  useEffect(() => {
    if (isArrowFlipped) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isArrowFlipped]);

  return (
    <div className="flex flex-col">
      <label htmlFor="" className="text-customGreen01">
        Services
      </label>
      <div
        className="relative flex h-[36px] w-[200px] rounded-md border-[3px] border-customGreen01"
        ref={dropdownRef}
      >
        <div className="flex w-[85%] items-center px-1">Select services</div>
        <div
          className="flex h-[100%] w-[15%] cursor-pointer items-center justify-center font-bold"
          onClick={handleFlippingArrow}
        >
          <img
            src="/images/dropdown-arrow.png"
            alt="dropdown-arrow"
            className={
              isArrowFlipped
                ? "w-[15px] rotate-[60deg] transition-all duration-200"
                : "w-[15px] transition-all duration-200"
            }
          />
        </div>
        <div
          className={
            isArrowFlipped
              ? "absolute left-[-1.5%] top-[100%] max-h-[200px] w-[103%] overflow-y-auto rounded-b-md border-[3px] border-t-0 border-customGreen01 bg-customBGColor py-1 opacity-100 transition-all duration-200 scrollbar-thin scrollbar-track-customBGColor scrollbar-thumb-customGreen01"
              : "absolute left-[-1.5%] top-[100%] max-h-0 w-[103%] overflow-hidden overflow-y-auto rounded-b-md border-[3px] border-t-0 border-customGreen01 py-1 opacity-0 transition-all duration-200"
          }
        >
          <ul>
            {services.map((service) => (
              <li
                className={
                  selectedServices.some((s) => s.name === service.name)
                    ? "mx-1 my-1 border-b-[2px] border-customGreen01 bg-customGreen01 px-2 text-customBGColor"
                    : "mx-1 my-1 border-b-[2px] border-customGreen01 px-2"
                }
                key={service._id}
              >
                <input
                  type="checkbox"
                  name="services"
                  value={service.name}
                  id={service.name}
                  className="hidden"
                  onChange={(event) => {
                    handleAddingServices(event, service.price);
                  }}
                />
                <label htmlFor={service.name} className="cursor-pointer">
                  {service.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* function handleAddingServices(event) {
    const serviceName = event.target.value;
    const selectedService = services.find(
      (service) => service.name === serviceName,
    );
    setDetails((prevDetails) => {
      const serviceExists = prevDetails.services.some(
        (s) => s.name === serviceName,
      );

      return {
        ...prevDetails,
        services: serviceExists
          ? prevDetails.services.filter((s) => s.name !== serviceName)
          : [
              ...prevDetails.services,
              {
                name: selectedService.name,
                price: selectedService.price,
                quantity: 1,
                total: selectedService.price,
              },
            ],
      };
    });
  } */
