const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose
  .connect("mongodb://127.0.0.1:27017/NextPally")
  .then(() => {
    console.log("Mongoose is now connected");
  })
  .catch((err) => {
    console.log("Mongoose connection for Branch has an error saying:", err);
  });

const accountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    required: true,
  },
});

const Account =
  mongoose.models.Account || mongoose.model("Account", accountSchema);

module.exports = Account;
/* 
async function createAccount() {
  const saltRounds = 10;
  const plainPassword = "worker123";

  try {
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    const newAcc = new Account({
      username: "worker",
      password: hashedPassword,
      role: "670bf21a0620781dbb5439e0",
    });

    await newAcc.save();
    console.log("Account created successfully.");
  } catch (error) {
    console.error("Error creating account:", error);
  }
}

createAccount(); */
