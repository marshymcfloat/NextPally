const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/NextPally")
  .then(() => {
    console.log("Mongoose is now connected");
  })
  .catch((err) => {
    console.log("Mongoose connection for Services has an error saying:", err);
  });

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  branchID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Branch",
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    required: true,
    type: Number,
  },
});

const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);

module.exports = Service;
/* 
Service.insertMany([
  {
    name: "Basic Manicure",
    branchID: "670b3be00831ee74d06a01e8",
    description: "Classic manicure with basic polish.",
    price: 200,
  },
  {
    name: "Gel Manicure",
    branchID: "670b3be00831ee74d06a01e8",
    description: "Long-lasting gel polish.",
    price: 400,
  },
  {
    name: "Spa Manicure",
    branchID: "670b3be00831ee74d06a01e8",
    description: "Manicure with a relaxing hand massage.",
    price: 500,
  },
  {
    name: "French Manicure",
    branchID: "670b3be00831ee74d06a01e8",
    description: "Elegant manicure with French tips.",
    price: 350,
  },
  {
    name: "Basic Pedicure",
    branchID: "670b3be00831ee74d06a01e8",
    description: "Classic pedicure with basic polish.",
    price: 250,
  },
  {
    name: "Gel Pedicure",
    branchID: "670b3be00831ee74d06a01e8",
    description: "Long-lasting gel polish for toes.",
    price: 450,
  },
  {
    name: "Spa Pedicure",
    branchID: "670b3be00831ee74d06a01e8",
    description: "Pedicure with a foot scrub and massage.",
    price: 550,
  },
  {
    name: "Paraffin Treatment",
    branchID: "670b3be00831ee74d06a01e8",
    description: "Moisturizing paraffin wax treatment.",
    price: 600,
  },
  {
    name: "Nail Art",
    branchID: "670b3be00831ee74d06a01e8",
    description: "Custom nail art design.",
    price: 150,
  },
  {
    name: "Callus Removal",
    branchID: "670b3be00831ee74d06a01e8",
    description: "Removes calluses for smooth feet.",
    price: 300,
  },

  {
    name: "Facial Cleansing",
    branchID: "670b3be00831ee74d06a01e9",
    description: "Deep cleansing for a healthy glow.",
    price: 800,
  },
  {
    name: "Acne Treatment",
    branchID: "670b3be00831ee74d06a01e9",
    description: "Targeted treatment for acne-prone skin.",
    price: 1200,
  },
  {
    name: "Anti-aging Facial",
    branchID: "670b3be00831ee74d06a01e9",
    description: "Facial to reduce fine lines and wrinkles.",
    price: 1500,
  },
  {
    name: "Microdermabrasion",
    branchID: "670b3be00831ee74d06a01e9",
    description: "Exfoliating treatment for smooth skin.",
    price: 1800,
  },
  {
    name: "Chemical Peel",
    branchID: "670b3be00831ee74d06a01e9",
    description: "Chemical peel to rejuvenate the skin.",
    price: 2000,
  },
  {
    name: "Skin Brightening",
    branchID: "670b3be00831ee74d06a01e9",
    description: "Brightening treatment for even skin tone.",
    price: 900,
  },
  {
    name: "Hydration Therapy",
    branchID: "670b3be00831ee74d06a01e9",
    description: "Hydrating treatment for dry skin.",
    price: 1100,
  },
  {
    name: "Dermal Fillers",
    branchID: "670b3be00831ee74d06a01e9",
    description: "Filler treatment to restore facial volume.",
    price: 2500,
  },
  {
    name: "Laser Resurfacing",
    branchID: "670b3be00831ee74d06a01e9",
    description: "Laser treatment for a youthful look.",
    price: 3000,
  },
  {
    name: "Pigmentation Removal",
    branchID: "670b3be00831ee74d06a01e9",
    description: "Laser treatment for dark spots.",
    price: 2000,
  },

  {
    name: "Swedish Massage",
    branchID: "670b3be00831ee74d06a01ea",
    description: "Relaxing full-body Swedish massage.",
    price: 1000,
  },
  {
    name: "Deep Tissue Massage",
    branchID: "670b3be00831ee74d06a01ea",
    description: "Deep pressure to relieve muscle tension.",
    price: 1300,
  },
  {
    name: "Hot Stone Massage",
    branchID: "670b3be00831ee74d06a01ea",
    description: "Massage using heated stones for relaxation.",
    price: 1500,
  },
  {
    name: "Aromatherapy Massage",
    branchID: "670b3be00831ee74d06a01ea",
    description: "Massage with essential oils.",
    price: 1200,
  },
  {
    name: "Thai Massage",
    branchID: "670b3be00831ee74d06a01ea",
    description: "Traditional Thai massage with stretching.",
    price: 1400,
  },
  {
    name: "Foot Reflexology",
    branchID: "670b3be00831ee74d06a01ea",
    description: "Reflexology massage focusing on feet.",
    price: 900,
  },
  {
    name: "Shiatsu Massage",
    branchID: "670b3be00831ee74d06a01ea",
    description: "Japanese massage technique using finger pressure.",
    price: 1600,
  },
  {
    name: "Prenatal Massage",
    branchID: "670b3be00831ee74d06a01ea",
    description: "Gentle massage for pregnant women.",
    price: 1400,
  },
  {
    name: "Sports Massage",
    branchID: "670b3be00831ee74d06a01ea",
    description: "Massage designed for athletes.",
    price: 1700,
  },
  {
    name: "Cupping Therapy",
    branchID: "670b3be00831ee74d06a01ea",
    description: "Therapy using suction cups to relieve pain.",
    price: 1600,
  },
]); */
