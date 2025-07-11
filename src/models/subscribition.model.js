import mongoose, { Schema } from "mongoose";


const subscribitionSchema = new Schema(
    {
        subscriber: {
            type: Schema.Types.ObjectId, // one who is subscribing
            ref: "User"
        },
        channel: {
            type: Schema.Types.ObjectId, // to whom subscriber is subscribing
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)


export const Subscribition = mongoose.model("Subscribition", subscribitionSchema)