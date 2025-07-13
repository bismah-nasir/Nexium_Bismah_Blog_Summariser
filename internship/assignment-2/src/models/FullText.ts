// models/FullText.ts
import { Collection, ObjectId } from "mongodb";
import { connectToMongoDB } from "@/lib/mongodb"; // Adjust path

export interface IFullText {
    _id?: ObjectId; // MongoDB's default ID type
    url: string;
    fullTextContent: string;
    createdAt: Date;
}

export async function getFullTextCollection(): Promise<Collection<IFullText>> {
    const { db } = await connectToMongoDB();
    // Ensure your collection name matches what you intend to use in MongoDB Atlas
    return db.collection<IFullText>("full_texts");
}
