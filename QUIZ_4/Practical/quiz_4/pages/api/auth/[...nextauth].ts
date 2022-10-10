// next auth library
import NextAuth, { NextAuthOptions } from 'next-auth';
// mongdb adapter
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
// providers
import CredentialsProvider from 'next-auth/providers/credentials';

// database mongodb promise (client)
import Database from '../../../resources/database/index';
import { compare } from 'bcrypt';

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    adapter: MongoDBAdapter(Database.getMongoClientPromise(process.env.MONGODB_URI!)),
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider(
            {
                // The name to display on the sign in form (e.g. "Sign in with...")
                name: 'Email & Password',
                // The credentials is used to generate a suitable form on the sign in page.
                // You can specify whatever fields you are expecting to be submitted.
                // e.g. domain, username, password, 2FA token, etc.
                // You can pass any HTML attribute to the <input> tag through the object.
                credentials: {
                    email: {
                        label: 'email',
                        type: 'text',
                        placeholder: 'Email here'
                    },
                    password: {
                        label: 'Password',
                        type: 'password'
                    }
                },
                async authorize(credentials, req) {
                    // extract credentials
                    const { username, password } = credentials;

                    // validation
                    if (!username || username.length < 8 || username.trim() !== username || !password || password.length < 8 || password.trim() !== password) {
                        throw {
                            code: 400,
                            message: 'invalid input'
                        };
                    }

                    // lowercase the username for query
                    const lowercasedUsername = username.toLowerCase();

                    // 2) wait for the db connection
                    await Database.setupClient(process.env.MONGODB_URI);
                    // 3) get the database
                    const database = Database.client.connection.db;

                    // 4) access the user collection
                    const userCollection = database.collection('user');
                    // 5) check if a user exists with that username
                    const user = await userCollection.findOne(
                        {
                            lowercasedUsername
                        }
                    );

                    if (!user) {
                        throw new Error('no user exists in our system');
                    }

                    // 6) compare passwords!
                    // note: user.password is encrypted so cannot do an === compare
                    const isValid = await compare(password, user.password);
                    if (!isValid) {
                        throw new Error('unable to log in');
                    }

                    console.log('user', JSON.stringify(user));
                    // 7) return valid user information (for session or token)
                    return {
                        id: user._id,
                        name: username
                    };
                }
            }
        )       
    ]
};

export default NextAuth(authOptions);