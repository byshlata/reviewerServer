import { model, Schema } from 'mongoose';
import { ReviewRatingLikeType } from "types/ReviewRatingLikeType";

export const RatingLikeSchema = new Schema<ReviewRatingLikeType>({
    countLike: {type: Number, required: true, default: 0},
    idUsers: {type: {}, required: true, default: {}}
}, {
    timestamps: true
});


export const RatingLike = model<ReviewRatingLikeType>('RatingLike', RatingLikeSchema);
