import { ObjectId } from "mongodb";

/**
 * Interface for creating a user
 * @id This is automatically added by mongodb
 * @email Users email address
 * @password Users password
 */
export interface Minion {
    id?: string | ObjectId;
	name: string;
	skill: string;
	personality: string;
	email: string;
	phone: string;
	description: string;
	image: string;
	messages: [{
		sender: string;
		email: string;
		phone: string;
		message: string;
	}]
}