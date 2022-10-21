import { EMAIL_REGEX, PASSWORD_REGEX } from "@/lib/resources/constants";
import type { User } from "@/lib/types/User";
import { model, Model, models, Schema } from "mongoose";
import { decrypt } from 'bcrypt';
/**
 * @description = This is the user schema
 * The full description of each property is referenced in the User interface
 */

const userSchema = new Schema<User>({
    // This is the email of the user
	email: {
        type: String,
        validate: {
            validator: function (v: string) {
                return EMAIL_REGEX.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
        required: [true, "User email address required"],
        unique: true
    },
	password: {
        type: String,
        required: [true, "User password required"]
    },
});

/**
 * @description
 * The model for the User collection.
 */
const UserModel = models["users"] as Model<User> || model<User>("users", userSchema);
export default UserModel;