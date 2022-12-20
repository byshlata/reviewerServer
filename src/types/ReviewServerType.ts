import { Nullable } from "./Nullable";
import { ReviewRatingStarType } from "types/ReviewRatingStarType";
import { ReviewRatingLikeType } from "types/ReviewRatingLikeType";
import { CommentType } from "./CommentType";

export type ReviewServerType = {
    _id: string;
    idAuthor: string;
    titleMain: string;
    titleAbout: string;
    category: string;
    tag: string[];
    reviewText: string;
    image?: string;
    authorAssessment: Nullable<number>;
    ratingStar: ReviewRatingStarType;
    ratingLike: ReviewRatingLikeType;
    createdAt: string;
    updatedAt: string;
    comments: CommentType[];
    _v: string;
}
