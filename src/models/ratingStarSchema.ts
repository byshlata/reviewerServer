import { model, Schema } from 'mongoose';
import { ReviewRatingStarType } from "../types/ReviewRatingStarType";

export const RatingStarSchema = new Schema<ReviewRatingStarType>({
    averageRating: {type: Number, required: true, default: 0},
    idUsers: {type: {}, required: true, default: {}}
}, {
    timestamps: true
});


export const RatingStar = model<ReviewRatingStarType>('RatingStar', RatingStarSchema);
