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

const businessSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Business =
  mongoose.models.Business || mongoose.model("Business", businessSchema);

module.exports = Business;
/* 
const newData = new Business({
  title: "BeautyFeel",
  location: "Puerto Princesa City, Palawan.",
});

newData.save(); */
