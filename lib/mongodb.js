

















/* import { MongoClient } from "mongodb";


async function seeder() {
  const dbURL = process.env.DATABASE_URL;

  console.log(process.env.DATABASE_URL);
  const client = await MongoClient.connect('mongodb+srv://canoydaniel06:Kv24N8OoNnBbxW1g@pallycluster.5y03f.mongodb.net/?retryWrites=true&w=majority&appName=pallycluster');

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

seeder(); */
