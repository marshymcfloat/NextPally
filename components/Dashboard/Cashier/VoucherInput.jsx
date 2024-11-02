"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { transactionActions } from "@/components/Redux/TransactionSlice";

export default function VoucherInput({ setDetails }) {
  const dispatch = useDispatch();
  const { accountID } = useParams();
  const [voucherCode, setVoucherCode] = useState(""); // State to track the last entered voucher
  const [found, setFound] = useState(false);
  const [voucherError, setVoucherError] = useState("");

  const subTotal = useSelector((state) => state.transaction.subTotal);

  async function fetchVoucher(voucher) {
    try {
      const response = await fetch(
        `/api/${accountID}/dashboard?voucher-code=${voucher}`,
      );
      if (!response.ok) {
        throw new Error("There is an error fetching voucher code");
      }
      const resData = await response.json();
      return resData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  const handleVoucherSearching = debounce(async (value) => {
    if (value.trim()) {
      const resData = await fetchVoucher(value);
      if (resData) {
        if (resData.status === "found") {
          setFound(true);
          setVoucherError("");
          if (resData.minimumAmount <= subTotal) {
            dispatch(transactionActions.voucherChange(resData.code));
            dispatch(transactionActions.setVoucherDiscount(resData.value));
          } else {
            setVoucherError("Required amount: " + resData.minimumAmount);
            dispatch(transactionActions.voucherChange(""));
            dispatch(transactionActions.setVoucherDiscount(0));
          }
        } else {
          setFound(false);
          dispatch(transactionActions.voucherChange(""));
          dispatch(transactionActions.setVoucherDiscount(0));
          setVoucherError("");
        }
      }
    }
  }, 800);

  function handleVoucherInput(event) {
    const value = event.target.value.toUpperCase();
    setVoucherCode(value);
    if (value.trim() === "") {
      dispatch(transactionActions.voucherChange(""));
      dispatch(transactionActions.setVoucherDiscount(0));
      setFound(false);
      setVoucherError("");
    } else {
      handleVoucherSearching(value);
    }
  }

  useEffect(() => {
    if (voucherCode) {
      handleVoucherSearching(voucherCode);
    }
  }, [subTotal, voucherCode]);

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
        value={voucherCode}
        onChange={handleVoucherInput}
        style={{ textTransform: "uppercase" }}
      />
    </div>
  );
}
