import { model, Schema } from 'mongoose';

import { ReviewServerType } from "types/ReviewServerType";
import { RatingLikeSchema } from "../models/ratingLikeSchema";
import { RatingStarSchema } from "../models/ratingStarSchema";
import { CommentSchema } from "../models/commentSchema";

const ReviewSchema = new Schema<ReviewServerType>({
    author: { type: Schema.Types.ObjectId, ref: "User" },
    authorAssessment: { type: Number, },
    titleMain: { type: String, required: true, },
    titleAbout: { type: String, required: true, },
    category: { type: String, required: true },
    reviewText: { type: String, required: true },
    tags: { type: [ String ] },
    image: { type: String, default: null },
    ratingLike: { type: RatingLikeSchema, required: true, },
    ratingStar: { type: RatingStarSchema, required: true, },
    comments: { type: [ CommentSchema ], required: true, default: [] },
    __v: { type: Number, select: false }
}, {
    timestamps: true
});

ReviewSchema.index({
    titleMain: 'text',
    titleAbout: 'text',
    reviewText: 'text',
    'comments.$**': 'text'
}, { language_override: 'russian' })

export const Review = model<ReviewServerType>('Review', ReviewSchema);

