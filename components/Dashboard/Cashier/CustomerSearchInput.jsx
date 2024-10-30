"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import { transactionActions } from "@/components/Redux/TransactionSlice";
import { useMutation } from "@tanstack/react-query";
import Spinner from "@/components/Indicators/Spinner";

export default function CustomerSearchInput() {
  const [customerSuggestions, setCustomerSuggestions] = useState([]);
  const { accountID } = useParams();
  const suggestionRef = useRef(null);
  const dispatch = useDispatch();
  const customerName = useSelector((state) => state.transaction.name);

  const fetchCustomerData = async (searchTerm) => {
    const response = await fetch(
      `/api/${accountID}/dashboard/?customer-name=${searchTerm}`,
    );
    if (!response.ok) {
      throw new Error("There is an error fetching customer info");
    }
    const resData = await response.json();
    return resData;
  };

  const { mutate, isError, error, isLoading } = useMutation({
    mutationKey: "customers",
    mutationFn: fetchCustomerData,
    onSuccess: (data) => {
      if (data.status === "found") {
        setCustomerSuggestions(data.foundCustomers);
      } else {
        setCustomerSuggestions([]);
      }
    },
  });

  const debouncedFetch = useCallback(
    debounce((name) => {
      mutate(name);
    }, 800),
    [mutate],
  );

  function handleInputChange(event) {
    const inputValue = event.target.value;
    debouncedFetch(inputValue);
    dispatch(transactionActions.nameInputChange(inputValue));
  }

  function handleSelectingSuggestion(event) {
    const selectedSuggestion = customerSuggestions.find(
      (element) => element.name === event.target.innerHTML,
    );
    if (selectedSuggestion) {
      dispatch(transactionActions.nameInputChange(selectedSuggestion.name));
      dispatch(transactionActions.streakChange(selectedSuggestion.streak));
      setCustomerSuggestions([]);
    }
  }

  useEffect(() => {
    return () => {
      debouncedFetch.cancel();
    };
  }, [debouncedFetch]);

  return (
    <div className="relative flex flex-col">
      <label htmlFor="customer-search" className="text-customGreen01">
        Customer Name:
      </label>
      <input
        id="customer-search"
        type="text"
        className="h-[50px] rounded-md border-[3px] border-customGreen01 px-2"
        onChange={handleInputChange}
        value={customerName}
      />
      {isLoading && <Spinner />} {/* Show spinner while loading */}
      {isError && <p className="text-red-500">{error.message}</p>}{" "}
      {/* Error message */}
      {customerSuggestions.length > 0 && (
        <div
          ref={suggestionRef}
          className="absolute top-[100%] z-10 max-h-[200px] w-full rounded-md border-[3px] border-t-0 border-customGreen01 bg-customBGColor pb-2"
        >
          <ul>
            {customerSuggestions.map((suggestion) => (
              <li
                key={suggestion._id}
                className="mx-2 my-2 cursor-pointer border-b-2 border-customGreen01"
                onClick={handleSelectingSuggestion}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
