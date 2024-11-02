import Account from "@/lib/models/Account";
import Role from "@/lib/models/Role";
import Business from "@/lib/models/Business";
import Branch from "@/lib/models/Branch";
import Service from "@/lib/models/Service";
import PaymentMethod from "@/lib/models/PaymentMethod";
import Customer from "@/lib/models/Customer";
import Voucher from "@/lib/models/Voucher";
import Transaction from "@/lib/models/Transactions";

import mongoose from "mongoose";

export async function GET(req, { params }) {
  const { accountID } = params;
  const url = new URL(req.url);
  const searchTerm = url.searchParams.get("customer-name");
  const voucherCode = url.searchParams.get("voucher-code");

  const foundAcc = await Account.findById(accountID)
    .populate("role")
    .populate("businessID");

  if (!foundAcc) {
    return new Response(JSON.stringify({ message: "Account not found." }), {
      status: 404,
    });
  }

  let data = { role: foundAcc.role.title };

  if (foundAcc.role.title === "cashier") {
    if (!searchTerm && !voucherCode) {
      const branches = await Branch.find({
        businessID: foundAcc.businessID._id,
      });
      const services = await Promise.all(
        branches.map((branch) => Service.find({ branchID: branch._id })),
      );
      const methods = await PaymentMethod.find({});
      data = { role: foundAcc.role, branches, services, methods };
    } else if (searchTerm) {
      const foundCustomers = await Customer.find(
        { name: { $regex: `^${searchTerm}`, $options: "i" } },
        { name: 1, streak: 1 },
      ).limit(5);

      data = {
        status: foundCustomers.length > 0 ? "found" : "not found",
        foundCustomers,
      };
    } else if (voucherCode) {
      const foundVoucher = await Voucher.findOne({ voucherCode });
      data = {
        code: foundVoucher ? foundVoucher.voucherCode : "",
        status: foundVoucher ? "found" : "not found",
        value: foundVoucher ? foundVoucher.voucherDiscount : null,
        minimumAmount: foundVoucher ? foundVoucher.minimumAmount : 0,
      };
    }
  }

  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(req) {
  const data = await req.json();

  const {
    name,
    streak,
    streakDiscount,
    voucher,
    voucherDiscount,
    branch,
    selectedServices,
    paymentMethod: method,
    totalDiscount,
    subTotal,
    grandTotal,
  } = data;

  console.log(data);

  const errors = [];

  const jsonResponseHeaders = { "Content-Type": "application/json" };

  const voucherID = await Voucher.findOne({ voucherCode: voucher });

  const selectedServicesID = await Promise.all(
    selectedServices.map(async (service) => {
      const foundService = await Service.findOne({ name: service.name });

      return {
        name: foundService._id,
        quantity: service.quantity,
        price: foundService.price,
      };
    }),
  );

  function capitalizeName(name) {
    const nameSplit = name.split(" ");
    const newName = nameSplit.map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    console.log(newName.join(" "));
    return newName.join(" ");
  }

  function isNameValid(name) {
    const modifiedName = capitalizeName(name);
    console.log(modifiedName);
    const trimmedName = modifiedName.trim();
    console.log(trimmedName);
    const validNamePattern = /^[A-Za-z\s]+$/;
    console.log(trimmedName.length > 5 && validNamePattern.test(trimmedName));
    return trimmedName.length > 5 && validNamePattern.test(trimmedName);
  }

  async function isCustomerExisting() {
    return await Customer.findOne({ name });
  }

  async function isBranchValid(branch) {
    return await Branch.findById(branch);
  }

  async function isPaymentValid(payment) {
    return await PaymentMethod.findById(payment);
  }

  async function isVoucherValid(voucherCode, voucherDiscount) {
    return await Voucher.findOne({ voucherCode, voucherDiscount });
  }

  async function createNewTransaction() {
    const newTransaction = new Transaction({
      name,
      streak,
      streakDiscount,
      voucher: voucherID,
      voucherDiscount,
      branch,
      selectedServices: selectedServicesID,
      paymentMethod: method,
      subTotal,
      totalDiscount,
      grandTotal,
    });

    newTransaction.save();
  }

  function isSubtotalCorrect(selectedServices, subTotal) {
    const calculatedSubTotal = selectedServices.reduce((sum, service) => {
      return sum + service.quantity * service.price;
    }, 0);

    return calculatedSubTotal === subTotal;
  }

  function isGrandTotalCorrect(selectedServices, grandTotal, totalDiscount) {
    const calculatedSubTotal = selectedServices.reduce((sum, service) => {
      return sum + service.quantity * service.price;
    }, 0);

    return grandTotal === calculatedSubTotal - totalDiscount;
  }

  async function areServicesValid(selectedServices) {
    const validationResults = await Promise.all(
      selectedServices.map(async (service) => {
        const foundService = await Service.findOne({
          name: service.name,
          price: service.price,
        });
        return !!foundService;
      }),
    );

    return validationResults.every((isValid) => isValid);
  }

  if (!isNameValid(name)) {
    errors.push({ name: "name", message: "Name didn't meet the requirement." });
  }

  if (parseInt(streak) > 4) {
    errors.push({ name: "streak", message: "Streak is not recognized." });
  }

  if (![0, 50, 75, 100].includes(streakDiscount)) {
    errors.push({
      name: "streakDiscount",
      message: "Streak discount is not recognized.",
    });
  }

  if (!(await isBranchValid(branch))) {
    errors.push({ name: "branch", message: "Branch is not recognized." });
  }

  if (!(await isPaymentValid(method))) {
    errors.push({
      name: "paymentMethod",
      message: "Payment Method can't be recognized.",
    });
  }
  if (
    voucher !== "" &&
    voucherDiscount !== 0 &&
    !(await isVoucherValid(voucher, voucherDiscount))
  ) {
    errors.push({ name: "voucher", message: "Voucher can't be recognized." });
  }

  if (totalDiscount !== voucherDiscount + streakDiscount) {
    errors.push({
      name: "totaldiscount",
      message: "Discount Total is not correct.",
    });
  }

  if (!isSubtotalCorrect(selectedServices, subTotal)) {
    errors.push({ name: "subTotal", message: "Sub Total is not correct" });
  }

  if (!isGrandTotalCorrect(selectedServices, grandTotal, totalDiscount)) {
    errors.push({ name: "grandTotal", message: "Grand Total is not correct." });
  }

  if (!areServicesValid(selectedServices)) {
    errors.push({
      name: "selectedServices",
      message: "There is a problem with the selected Services",
    });
  }

  if (!(await isCustomerExisting())) {
    createNewTransaction();
    return new Response(JSON.stringify({ status: "successful" }), {
      status: 200,
      headers: jsonResponseHeaders,
    });
  }

  if (await isCustomerExisting()) {
    createNewTransaction();
    return new Response(JSON.stringify({ status: "successful" }), {
      status: 200,
      headers: jsonResponseHeaders,
    });
  }

  if (errors.length > 0) {
    return new Response(JSON.stringify({ errors }), {
      status: 400,
      headers: jsonResponseHeaders,
    });
  }
}
