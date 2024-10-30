const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/NextPally")
  .then(() => {
    console.log("Mongoose is now connected");
  })
  .catch((err) => {
    console.log("Mongoose connection for Services has an error saying:", err);
  });

const voucherSchema = new mongoose.Schema({
  voucherCode: {
    type: String,
    required: true,
  },
  voucherDiscount: {
    type: Number,
    required: true,
  },
  hasUsed: {
    type: Boolean,
    required: true,
    default: false,
  },
  minimumAmount: {
    type: Number,
    default: 0,
    required: true,
  },
});

const Voucher =
  mongoose.models.Voucher || mongoose.model("Voucher", voucherSchema);

const dummyVouchers = [
  {
    voucherCode: "BF1105",
    voucherDiscount: 25,
  },
  {
    voucherCode: "BF1106",
    voucherDiscount: 100,
    minimumAmount: 1000,
  },
  {
    voucherCode: "BF1107",
    voucherDiscount: 100,
    minimumAmount: 1000,
  },
  {
    voucherCode: "BF1108",
    voucherDiscount: 50,
    minimumAmount: 500,
  },
  {
    voucherCode: "BF1109",
    voucherDiscount: 150,
    minimumAmount: 1500,
  },
];

module.exports = Voucher;
