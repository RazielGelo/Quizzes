import { ObjectId } from "mongodb";

/**
 * Interface for creating a user
 * @id This is automatically added by mongodb
 * @email Users email address
 * @password Users password
 */
export interface User {
    id?: string | ObjectId;
	email: string;
	password: string;
}