import { ReviewServerType, ReviewUserTableType } from "types";

export const createUserReviewsTableResponse = (reviews: ReviewServerType[]): ReviewUserTableType[] =>
    reviews.map(({createdAt, authorAssessment, ratingLike, titleMain, _id, ratingStar}) =>
        ({createdAt, authorAssessment, ratingLike: ratingLike.countLike, titleMain, ratingStar: ratingStar.averageRating, id: _id }) )

