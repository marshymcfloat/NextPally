import Account from "@/lib/models/Account";
import Role from "@/lib/models/Role";
import Business from "@/lib/models/Business";
import Branch from "@/lib/models/Branch";
import Service from "@/lib/models/Service";
import PaymentMethod from "@/lib/models/PaymentMethod";
import Customer from "@/lib/models/Customer";
import Voucher from "@/lib/models/Voucher";

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
      console.log(searchTerm);
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
      console.log(data);
    }
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
