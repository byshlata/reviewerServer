import { model, Schema } from 'mongoose';
import { ReviewRatingLikeType } from "types/ReviewRatingLikeType";

export const RatingLikeSchema = new Schema<ReviewRatingLikeType>({
    countLike: { type: Number, required: true, default: 0 },
    idUsers: [{ type: Schema.Types.ObjectId, ref: "User"}],
    __v: { type: Number, select: false }
}, {
    timestamps: true
});


export const RatingLike = model<ReviewRatingLikeType>('RatingLike', RatingLikeSchema);
