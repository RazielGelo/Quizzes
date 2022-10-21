import NextAuth, { NextAuthOptions } from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import Database from "@/lib/resources/database";
import { compare } from 'bcrypt';
import UserModel from "@/lib/models/User"
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/lib/resources/constants";

/**
 * @description
 * This manages the authentication for Passwordless, Google and Discord OAuth
 */
export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt"
	},
	/**
	 * @description
	 * Set-up a single mongodb-adapter connection
	 */
	adapter: MongoDBAdapter(Database.setupAdapterConnection(process.env.MONGODB_URI)),
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. 'Sign in with...')
			name: 'your Email & Password',
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				email: { label: "Email", type: "text", placeholder: "Enter your email address here" },
				password: { label: "Password", type: "password", placeholder: "Enter your password here" }
			},
			async authorize(credentials, req) {
				// extract credentials
				const { email, password } = credentials;

				// validation
				if (!email || !EMAIL_REGEX.test(email) || email.trim() !== email || !password || !PASSWORD_REGEX.test(password) || password.trim() !== password) {
					throw {
						code: 400,
						message: 'Invalid input for both email and password'
					};
				}

				// lowercase the username for query
				const lowecasedEmail = email.toLowerCase();

				// 2) wait for the db connection
				await Database.setup(process.env.MONGODB_URI);

				// 3) check if a user exists with that email
				const user = await UserModel.findOne(
					{
						lowecasedEmail
					}
				);

				if (!user) {
					throw new Error('No user with that email exists');
				}

				// 4) compare passwords!
				// note: user.password is encrypted so cannot do an === compare
				const isValid = await compare(password, user.password);
				if (!isValid) {
					throw new Error('unable to log in');
				}

				console.log('user', JSON.stringify(user));
				// 5) return valid user information (for session or token)
				return {
					id: user._id,
					email: email
				};
			}
		})
	],
	callbacks: {
		async jwt({ token, user, account }) {
			if (user) {
				token.user = user;
			}

			return token;
		},
		async session({ session, token, user }) {
			if (token && token.user) {
				session.user = token.user;
			}

			return session;
		}
	}
};

export default NextAuth(authOptions);