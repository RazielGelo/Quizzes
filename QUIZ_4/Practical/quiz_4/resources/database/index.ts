// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

export default class Database {

    // mongoose client
    static client: typeof mongoose;
	static mongoClientPromise: Promise<MongoClient>

    /**
     * sets up the database singleton
     * @param uri connection uri of the database
     * @returns the database that has been setup
     */
    static async setup(uri: string = process.env.MONGODB_URI!) {
        if (!this.client) {
            await this.setupClient(uri);
        }

        // returns the client object
        return this.client;
    }

    /**
     * sets up the client object
     * @param uri connection uri of the database
     * (expected to contain datbase name)
     */
    static async setupClient(uri: string = process.env.MONGODB_URI!) {
        // connect the client to the server
        const client = await mongoose.connect(uri);

        this.client = client;
    }

	static async setupAdapterConnection(uri: string = process.env.MONGODB_URI!): Promise<MongoClient> {
		if (!this.mongoClientPromise) {
			this.mongoClientPromise = MongoClient.connect(uri);
		}
		
		return this.mongoClientPromise
	}

    static async getMongoClientPromise(uri: string): Promise<MongoClient> {
        await this.setupClient(uri);

        return this.client.connection.getClient();
    }

}