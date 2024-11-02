import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  streak: 0,
  streakDiscount: 0,
  voucher: "",
  voucherDiscount: 0,
  branch: "",
  selectedServices: [],
  paymentMethod: "",
  totalDiscount: 0,
  subTotal: 0,
  grandTotal: 0,
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
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
    modifyServices(state, action) {
      const { name, quantity, price } = action.payload;
      const serviceIndex = state.selectedServices.findIndex(
        (service) => service.name === name,
      );

      if (serviceIndex === -1) {
        state.selectedServices.push({ name, quantity, price });
      } else {
        state.selectedServices.splice(serviceIndex, 1);
      }

      state.subTotal = state.selectedServices.reduce(
        (total, service) => total + service.quantity * service.price,
        0,
      );

      state.grandTotal = state.subTotal - state.totalDiscount;
    },
    voucherChange(state, action) {
      state.voucher = action.payload;
    },
    setVoucherDiscount(state, action) {
      state.voucherDiscount = action.payload;
      state.totalDiscount = state.streakDiscount + state.voucherDiscount;

      state.grandTotal = state.subTotal - state.totalDiscount;
    },
    setStreakDiscount(state, action) {
      state.streakDiscount = action.payload;
      state.totalDiscount = state.streakDiscount + state.voucherDiscount;

      state.grandTotal = state.subTotal - state.totalDiscount;
    },
    modifyServiceQuantity(state, action) {
      const { identifier, name } = action.payload;

      state.selectedServices = state.selectedServices
        .map((service) => {
          if (service.name === name) {
            if (identifier === "inc") {
              service.quantity++;
            } else if (identifier === "dec" && service.quantity > 0) {
              service.quantity--;
            }
            return service;
          }
          return service;
        })
        .filter((service) => service.quantity > 0);

      state.subTotal = state.selectedServices.reduce(
        (total, service) => total + service.quantity * service.price,
        0,
      );

      state.grandTotal = state.subTotal - state.totalDiscount;
    },
    resetTransaction(state) {
      return {
        name: "",
        streak: 0,
        streakDiscount: 0,
        voucher: "",
        voucherDiscount: 0,
        branch: "",
        selectedServices: [],
        paymentMethod: "",
        totalDiscount: 0,
        subTotal: 0,
        grandTotal: 0,
      };
    },
  },
});

export const transactionActions = transactionSlice.actions;
