const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/NextPally")
  .then(() => {
    console.log("Mongoose is now connected");
  })
  .catch((err) => {
    console.log("Mongoose connection for Branch has an error saying:", err);
  });

const branchSchema = new mongoose.Schema({
  businessID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },
  branchCode: {
    type: String,
    required: true,
  },
  branchName: {
    type: String,
    required: true,
  },
});

const Branch = mongoose.models.Branch || mongoose.model("Branch", branchSchema);

module.exports = Branch;

/* Branch.insertMany([
  {
    branchCode: "BBF01",
    branchName: "Manicure and Pedicure",
    businessID: "670b3aef40d2f698a629fb7f",
  },
  {
    branchCode: "BBF02",
    branchName: "Skin Improvement",
    businessID: "670b3aef40d2f698a629fb7f",
  },
  {
    branchCode: "BBF03",
    branchName: "Massage Therapy",
    businessID: "670b3aef40d2f698a629fb7f",
  },
]);
 */
