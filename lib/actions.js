"use server";

import Account from "./models/Account";

export async function loginValidity(formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const foundAccc = await Account.findOne({ username, password });

  if (foundAccc) {
    throw new Error("");
  }
}
