import Account from "@/lib/models/Account"; // Your Account model
import Role from "@/lib/models/Role"; // Import the Role model

export async function GET(req, { params }) {
  const { accountID } = params;

  const foundAcc = await Account.findById(accountID).populate("role");

  if (!foundAcc) {
    return new Response(JSON.stringify({ message: "Account not found." }), {
      status: 404,
    });
  }

  const roleTitle = foundAcc.role ? foundAcc.role.title : null;

  return new Response(JSON.stringify({ role: roleTitle }));
}
