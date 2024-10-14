const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/NextPally")
  .then(() => {
    console.log("Mongoose is now connected");
  })
  .catch((err) => {
    console.log("Mongoose connection for Branch has an error saying:", err);
  });

const roleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const Role = mongoose.models.Role || mongoose.model("Role", roleSchema);

module.exports = Role;

/* Role.insertMany([
  { title: "owner" },
  { title: "worker" },
  { title: "cashier" },
]);
 */
