import { MongoClient } from "mongodb";
import env from "./env.js";

const client = new MongoClient(env.MONGODB_URL)
  .db("encode-ai")
  .collection("users");

export default client;
