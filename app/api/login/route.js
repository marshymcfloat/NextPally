import Account from "@/lib/models/Account";

export async function POST(req) {
  try {
    const body = req.json();
    const { username, password } = body;

    const foundAcc = await Account.findOne({ username, password });

    if (!foundAcc) {
      return new Response(
        JSON.stringify({
          message:
            "We are sorry, but we cannot find any matched by the credentials that is been provided. Please try again.",
        }),
        { status: 401, headers: { "Content-type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({
        message: "successful.",
        userID: foundAcc._id.toString(),
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        message: "There was a problem processing your request.",
        error: err.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
