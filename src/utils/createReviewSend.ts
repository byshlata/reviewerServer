import { ReviewServerType } from "types";
import { change_IdById } from "../utils";

export const createReviewSend = (review: ReviewServerType): any => {

    const reviewSend = JSON.parse(JSON.stringify(review)) as ReviewServerType
    const changeAuthorComments = reviewSend.comments.map(comment => ({
        ...comment,
        author: change_IdById(comment.author)
    }))
    const changeAuthorReview =
        {
            ...reviewSend,
            author: change_IdById(reviewSend.author),
            comments: [ ...changeAuthorComments ]
        }
    return change_IdById(changeAuthorReview)
}
