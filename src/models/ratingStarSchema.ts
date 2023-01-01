import { model, Schema } from 'mongoose';
import { ReviewRatingStarType } from "../types/ReviewRatingStarType";

export const RatingStarSchema = new Schema<ReviewRatingStarType>({
    averageRating: { type: Number, required: true, default: 0 },
    idUsers: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
    __v: { type: Number, select: false }
}, {
    timestamps: true
});


export const RatingStar = model<ReviewRatingStarType>('RatingStar', RatingStarSchema);
