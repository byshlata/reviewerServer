import {
    UserServerType,
    CommentServerType,
    ReviewRatingLikeType,
    ReviewRatingStarType
} from "types";

export type ReviewServerType = {
    _id: string;
    author: UserServerType;
    titleMain: string;
    titleAbout: string;
    category: string;
    tags: string[];
    reviewText: string;
    image?: string;
    authorAssessment: number;
    ratingStar: ReviewRatingStarType;
    ratingLike: ReviewRatingLikeType;
    createdAt: string;
    updatedAt: string;
    comments: CommentServerType[];
    __v: number;
}
