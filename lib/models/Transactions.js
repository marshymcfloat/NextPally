const mongoose = require("mongoose");

function getUTC8Date() {
  const date = new Date();
  const utc8Offset = 8 * 60; // UTC+8 in minutes
  return new Date(date.getTime() + utc8Offset * 60 * 1000);
}

mongoose
  .connect("mongodb://127.0.0.1:27017/NextPally")
  .then(() => {
    console.log("Mongoose is now connected");
  })
  .catch((err) => {
    console.log("Mongoose connection for Branch has an error saying:", err);
  });

const transactionSchema = new mongoose.Schema({
  transactBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  businessID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Business",
  },
  name: {
    type: String,
    required: true,
  },
  streak: {
    type: Number,
    required: true,
  },
  streakDiscount: {
    type: Number,
    required: true,
    default: 0,
  },
  voucher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Voucher",
    default: null,
  },
  voucherDiscount: {
    type: Number,
    default: 0,
  },
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Branch",
  },
  selectedServices: {
    type: [
      {
        name: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Service",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    required: true,
  },
  paymentMethod: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  subTotal: {
    type: Number,
    required: true,
  },
  totalDiscount: {
    type: Number,
    required: true,
  },
  grandTotal: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  date: {
    type: String,
    required: true,
    default: () => {
      const currentDateTime = getUTC8Date();
      return currentDateTime.toISOString().split("T")[0];
    },
  },
  time: {
    type: String,
    required: true,
    default: () => {
      const currentDateTime = getUTC8Date();
      return currentDateTime.toISOString().split("T")[1].slice(0, 5);
    },
  },
});

const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
