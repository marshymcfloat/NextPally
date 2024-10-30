"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { transactionActions } from "@/components/Redux/TransactionSlice";

export default function VoucherInput({ setDetails, totalAmount }) {
  const dispatch = useDispatch();
  const { accountID } = useParams();
  const [found, setFound] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [voucherError, setVoucherError] = useState("");

  async function fetchVoucher(voucher) {
    try {
      const response = await fetch(
        `/api/${accountID}/dashboard?voucher-code=${voucher}`,
      );
      if (!response.ok) {
        throw new Error("There is an error fetching voucher code");
      }
      const resData = await response.json();
      if (resData.status === "found") {
        if (resData.minimumAmount < totalAmount) {
          dispatch(transactionActions.voucherChange(resData.code));
          dispatch(transactionActions.setVoucherDiscount(resData.value));
        } else if (resData.minimumAmount > totalAmount) {
          setVoucherError("required amount: " + resData.minimumAmount);
        }
      } else {
        setDiscountAmount(0);
        setFound(false);
        setDetails((prevState) => ({
          ...prevState,
          voucher: "",
          voucherDiscount: 0,
        }));
        setVoucherError("");
      }
    } catch (error) {
      console.log(error);
      setDiscountAmount(0);
      setFound(false);
    }
  }

  const handleVoucherSearching = debounce((value) => {
    if (value.trim()) {
      fetchVoucher(value);
    }
  }, 800);

  function handleVoucherInput(event) {
    const value = event.target.value.toUpperCase();
    handleVoucherSearching(value);
  }

  const { mutate, isError } = useMutation({
    mutationKey: "voucher",
    mutationFn: fetchVoucher,
  });

  return (
    <div className="flex flex-col">
      <label htmlFor="" className="text-customGreen01">
        {voucherError.length !== 0 ? voucherError : "Voucher"}
      </label>
      <input
        type="text"
        className={
          found
            ? "max-w-[100px] rounded-md border-[3px] border-customGreen01 px-2 py-1 text-customGreen01"
            : "max-w-[100px] rounded-md border-[3px] border-customGreen01 px-2 py-1 text-red-500"
        }
        name="voucher"
        onChange={handleVoucherInput}
        style={{ textTransform: "uppercase" }}
      />
    </div>
  );
}
