import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoScheme = new Schema(
    {
        videoFile: {
            type: String, // cloudanary url
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        discribition: {
            type: String,
            required: true
        },
        duration: {
            type: Number,  // cloudanary url
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            required: true

        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    },
    {
        timestamps: true
    }
);

videoScheme.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("Video", videoScheme)