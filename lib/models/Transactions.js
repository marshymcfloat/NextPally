const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/NextPally")
  .then(() => {
    console.log("Mongoose is now connected");
  })
  .catch((err) => {
    console.log("Mongoose connection for Branch has an error saying:", err);
  });

const transactionSchema = new mongoose.Schema({
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
    required: true,
    default: "",
  },
  voucherDiscount: {
    type: Number,
    required: true,
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
  dataAndTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
