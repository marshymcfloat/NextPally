import Account from "@/lib/models/Account";
import Role from "@/lib/models/Role";
import Business from "@/lib/models/Business";
import Branch from "@/lib/models/Branch";
import Service from "@/lib/models/Service";
import PaymentMethod from "@/lib/models/PaymentMethod";

export async function GET(req, { params }) {
  const { accountID } = params;

  const foundAcc = await Account.findById(accountID)
    .populate("role")
    .populate("businessID");

  if (!foundAcc) {
    return new Response(JSON.stringify({ message: "Account not found." }), {
      status: 404,
    });
  }

  console.log(foundAcc);
  let data = { role: foundAcc.role.title };

  if (foundAcc.role.title === "cashier") {
    const branches = await Branch.find({
      businessID: foundAcc.businessID._id,
    });

    const services = await Promise.all(
      branches.map((branch) => Service.find({ branchID: branch._id })),
    );

    const methods = await PaymentMethod.find({});

    console.log(methods);
    data = { role: foundAcc.role, branches, services, methods };
  }

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
