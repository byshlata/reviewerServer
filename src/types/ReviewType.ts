import { Nullable } from "./Nullable";
import { ReviewRatingStarType } from "types/ReviewRatingStarType";
import { ReviewRatingLikeType } from "types/ReviewRatingLikeType";
import { CommentType } from "./CommentType";

export type ReviewType = {
    _id: string;
    idAuthor: string;
    titleMain: string;
    titleAbout: string;
    category: string;
    tag: string[];
    text: string;
    image?: string;
    ratingAuthor: Nullable<number>;
    ratingArticle: ReviewRatingStarType;
    likeArticle: ReviewRatingLikeType;
    createdAt: string;
    updatedAt: string;
    comments: CommentType[];
    _v: string;
}
