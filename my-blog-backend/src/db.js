import { MongoClient } from "mongodb";

let db;
console.log("Username:", process.env.MONGO_USERNAME);
console.log("Password:", process.env.MONGO_PASSWORD);
const connectToDb = async (cb) => {
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.jy7jq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );

  try {
    await client.connect();
    db = client.db("react-blog-db");
    cb();
  } catch (error) {
    console.error("Failed to connect to the database", error);
    throw error;
  }
};

export { db, connectToDb };
