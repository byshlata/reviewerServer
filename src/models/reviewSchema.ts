import { model, Schema } from 'mongoose';
import { UserServerType } from "types";
import { ReviewType } from "types/ReviewType";

const reviewSchema = new Schema<ReviewType>({
    idAuthor: { type: String, required: true,  },
    titleMain: {type: String, required: true},
    titleAbout: {type: String, required: true},
    category: {type: String, required: true},

}, {
    timestamps: true
});



// tag: string[];
// text: string;
// image?: string;
// ratingAuthor: Nullable<number>;
// ratingArticle: ReviewRatingStarType;
// likeArticle: ReviewRatingLikeType;
// createdAt: string;
// updatedAt: string;
// comments: CommentType[];

export const Review = model<UserServerType>('Review', reviewSchema);
