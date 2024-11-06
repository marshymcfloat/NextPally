import Account from "@/lib/models/Account";
import Transaction from "@/lib/models/Transactions";

export async function GET(req, { params }) {
  const { accountID } = params;

  try {
    const account = await Account.findById(accountID).select("businessID");

    if (!account) {
      return new Response(JSON.stringify({ message: "Account not found" }), {
        status: 404,
      });
    }

    const transactions = await Transaction.find({
      businessID: account.businessID,
      transactBy: accountID,
    });

    return new Response(
      JSON.stringify({ message: "Successful", transactions }),
      { status: 200 },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching data", error: error.message }),
      {
        status: 500,
      },
    );
  }
}
