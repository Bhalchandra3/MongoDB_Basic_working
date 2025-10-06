import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const app = express();

import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
"mongodb+srv://Bhalchandra:Bhalchandra%409099@practice.6evxvsz.mongodb.net/?retryWrites=true&w=majority&appName=practice";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
serverApi: {
version: ServerApiVersion.v1,
strict: true,
deprecationErrors: true,
},
});
async function run() {
try {
// Connect the client to the server (optional starting in v4.7)
await client.connect();
} finally {
// Ensures that the client will close when you finish/error
await client.close();
}
}

run().catch(console.dir);

app.listen(8000, () => {
console.log(`server is runnning at port `);
});
