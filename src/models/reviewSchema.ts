import { model, Schema } from 'mongoose';

import { ReviewServerType } from "types/ReviewServerType";
import { RatingLikeSchema } from "../models/ratingLikeSchema";
import { RatingStarSchema } from "../models/ratingStarSchema";
import { CommentSchema } from "../models/commentSchema";

const ReviewSchema = new Schema<ReviewServerType>({
    idAuthor: { type: String, required: true, },
    titleMain: { type: String, required: true },
    titleAbout: { type: String, required: true },
    category: { type: String, required: true },
    reviewText: { type: String, required: true },
    tag: {type: [String] },
    image: { type: String, default: null },
    authorAssessment: { type: Number, required: true, default: null },
    ratingLike: {type: RatingLikeSchema, required: true, },
    ratingStar: {type: RatingStarSchema, required: true, },
    comments: { type: [CommentSchema], required: true, default: []}
}, {
    timestamps: true
});


export const Review = model<ReviewServerType>('Review', ReviewSchema);
