"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { transactionSlice } from "./TransactionSlice";

const store = configureStore({
  reducer: { transaction: transactionSlice.reducer },
});

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
