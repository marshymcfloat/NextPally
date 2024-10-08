import { MongoClient } from "mongodb";
/* 
const customerCollection = db.collection("customer");
const servicesCollection = db.collection("services");
const orderReceiptCollection = db.collection("order_receipt"); */

async function insertBranch() {
  const dbURL = process.env.DATABASE_URL;

  console.log(dbURL);
  const client = await MongoClient.connect(dbURL);

  const db = client.db();

  const branchCollection = db.collection("branch");

  const branches = await branchCollection.insertMany([
    { name: "skin improvement" },
    { name: "manicure and pedicure" },
    { name: "massage therapy" },
  ]);

  if (branches) {
    console.log("successful");
  }
}

insertBranch();
