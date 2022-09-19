import { MongoClient } from "mongodb";

export async function setupDatabase() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    try {
        console.log('[LOG] initialized new client');

        // connect the client to the database
        return client.connect();
    } catch(error) {
        console.log('[ERROR]', error);
        // ensure the client closes regardless
        // of error thrown or sucess case
        await client.close();

        throw error;
    }
}