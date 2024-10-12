import Account from "@/lib/models/Account";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, password } = body;
    const foundAcc = await Account.findOne({ username });
    console.log(username);
    console.log(foundAcc);
    if (!foundAcc) {
      return new Response(
        JSON.stringify({
          message:
            "We are sorry, but we cannot find any account matching the provided credentials.",
        }),
        { status: 401, headers: { "Content-Type": "application/json" } },
      );
    }
    const isPasswordCorrect = await bcrypt.compare(password, foundAcc.password);
    if (!isPasswordCorrect) {
      return new Response(
        JSON.stringify({
          message: "Invalid password. Please try again.",
        }),
        { status: 401, headers: { "Content-Type": "application/json" } },
      );
    }
    return new Response(
      JSON.stringify({
        message: "Login successful.",
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
