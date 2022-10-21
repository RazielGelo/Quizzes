import Database from "@/lib/resources/database";
import { hash } from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import UserModel from "@/lib/models/User"
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/lib/resources/constants";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log("Hello")
	try {
		// check if the request is a POST
		if (req.method === 'POST') {
			// 1) get username & password from the body of the request
			const { email, password }: { email: string, password: string } = req.body;

			console.log(email, password)

			// validation
			if (!email || !EMAIL_REGEX.test(email) || email.trim() !== email) {
				throw {
					code: 400,
					message: 'Invalid input for email'
				};
			}
			if (!password || !PASSWORD_REGEX.test(password) || password.trim() !== password) {
				throw {
					code: 400,
					message: 'Invalid input for password'
				};
			}

			// lowercase the username for storage
			const lowercasedEmail = email.toLowerCase();

			// 2) wait for the db connection
			await Database.setup(process.env.MONGODB_URI);
			// 3) check if a user exists with that username
			const existingUser = await UserModel.findOne(
				{
					lowercasedEmail
				}
			);

			// 4) throw an error if user exists
			if (existingUser) {
				throw {
					code: 400,
					message: 'This email already exist in the database.'
				};
			}

			// 5) hash the password (auto generate a salt, 10 rounds)
			const hashedPassword = await hash(password, 10);

			// 6) create user in the database
			const user = await new UserModel(
				{
					email,
					password: hashedPassword
				}
			).save();

			// optional, sign in user automatically
			// look at the next auth docs to do this
			// 7) send back a success response
			res.status(201).json(
				{
					code: 201,
					data: {
						id: user._id.toString()
					}
				}
			);
		} else {
			throw {
				code: 401,
				message: `${req.method} method not supported`
			};
		}
	} catch (error: any) {
		const { code = 500, message } = error;
		res.status(code).json(
			{
				code,
				data: {
					message
				}
			}
		);
	}
}