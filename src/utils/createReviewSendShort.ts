import { ReviewSendShortType, ReviewServerType } from "types";
import { change_IdById } from "../utils";

export const createReviewSendShort = (review: ReviewServerType): ReviewSendShortType => {
    const {reviewText, comments, ...otherData } = JSON.parse(JSON.stringify(review)) as ReviewServerType
    const authorSend = change_IdById(otherData.author)

    return change_IdById({...otherData, author: authorSend})
}
