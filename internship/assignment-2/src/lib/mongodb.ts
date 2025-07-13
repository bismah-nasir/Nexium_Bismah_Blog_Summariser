// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.MONGODB_URI!;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// lib/mongodb.ts
import { MongoClient, ServerApiVersion, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;

if (!uri) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToMongoDB() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    try {
        await client.connect();
        // Assuming your database name is part of the URI, or you can specify it here
        const dbName = new URL(uri).pathname.substring(1); // Extracts db name from URI like /mydb
        const db = client.db(dbName || "blog_summarizer"); // Use default if no db name in URI

        cachedClient = client;
        cachedDb = db;

        console.log("Successfully connected to MongoDB!");
        return { client, db };
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
}
