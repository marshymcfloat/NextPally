import Account from "@/lib/models/Account";
import Role from "@/lib/models/Role";
import Business from "@/lib/models/Business";
import Branch from "@/lib/models/Branch";
import Service from "@/lib/models/Service";

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

  console.log(foundAcc.role);
  return new Response(JSON.stringify({ role: foundAcc.role }), {
    status: 200,
  });
}
