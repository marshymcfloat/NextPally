const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/NextPally")
  .then(() => {
    console.log("Mongoose is now connected");
  })
  .catch((err) => {
    console.log("Mongoose connection for Branch has an error saying:", err);
  });

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  streak: {
    type: String,
    enum: ["0", "1", "2", "3"],
    required: true,
    default: "0",
  },
  businessID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },
  totalPaid: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Customer =
  mongoose.models.Customer || mongoose.model("Customer", customerSchema);

module.exports = Customer;
/* 
Customer.insertMany([
  {
    name: "Canoy, Daniel",
    streak: "2",
    businessID: "670b3aef40d2f698a629fb7f",
  },
  {
    name: "Canoy, Daylinda",
    streak: "3",
    businessID: "670b3aef40d2f698a629fb7f",
  },
  {
    name: "Villanueza, Cindy",
    streak: "1",
    businessID: "670b3aef40d2f698a629fb7f",
  },
]);
 */
