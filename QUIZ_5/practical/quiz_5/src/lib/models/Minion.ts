import { EMAIL_REGEX, PHONE_REGEX } from "@/lib/resources/constants";
import type { Minion } from "@/lib/types/Minion";
import { model, Model, models, Schema } from "mongoose";

/**
 * @description = This is the user schema
 * The full description of each property is referenced in the User interface
 */

const minionSchema = new Schema<Minion>({
    // This is the name of the minion
    name: {
        type: String,
        min: [2, "name should be at least 2 characters"],
        max: [30, "name should be max of 30 characters"],
        required: [true, "name is required"]
    },
    // This is the skill of the minion
    skill: {
        type: String,
        required: [true, "Skill is required"]
    },
	// This is the personality of the minion
    personality: {
        type: String,
        required: [true, "Personality is required"]
    },
    // This is the email of the minion
    email: {
        type: String,
        validate: {
            validator: function (v: string) {
                return EMAIL_REGEX.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
        required: [true, "Email address required"],
        unique: true
    },
    // This is the phonenumber of the minion
    phone: {
        type: String,
        validate: {
            validator: function (v: string) {
                return PHONE_REGEX.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, "User phone number required"]
    },
    // This is the additional description of the minion
    description: {
        type: String,
        required: [true, "Description is required"]
    },
	// This is the image of the minion
	image: {
        type: String,
        required: [true, "Image is required"]
    },
    // This is where the matches record are contained or referenced
    messages: [{
        sender: String,
		email: String,
		phone: String,
		message: String
    }]
});


/**
 * @description
 * The model for the Minion collection.
 */
const MinionModel = models["minions"] as Model<Minion> || model<Minion>("minions", minionSchema);
export default MinionModel;