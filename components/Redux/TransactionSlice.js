import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    name: "",
    streak: 0,
    streakDiscount: 0,
    voucher: "",
    voucherDiscount: 0,
    branch: "",
    availed: [],
    selectedServices: [],
    paymentMethod: "",
    totalDiscount: 0,
    subTotal: 0,
    grandTotal: 0,
  },
  reducers: {
    nameInputChange(state, action) {
      state.name = action.payload;
    },
    streakChange(state, action) {
      state.streak = action.payload;
    },
    branchChange(state, action) {
      state.branch = action.payload;
    },
    paymentMethodChange(state, action) {
      state.paymentMethod = action.payload;
    },
    quantityChange(state, action) {},
    modifyServices(state, action) {
      const serviceIndex = state.selectedServices.findIndex(
        (element) => element.name === action.payload.name,
      );

      if (serviceIndex === -1) {
        state.selectedServices.push(action.payload);
      } else {
        state.selectedServices.splice(serviceIndex, 1);
      }
    },
    voucherChange(state, action) {
      state.voucher = action.payload;
    },
    setVoucherDiscount(state, action) {
      state.voucherDiscount = action.payload;
    },
  },
});

export const transactionActions = transactionSlice.actions;
