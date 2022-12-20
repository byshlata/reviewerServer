import { ReviewServerType, DataReviewType } from "types";
import { Review, RatingLike, RatingStar } from "../../models";
import { throwError } from "../../utils"


export const getReviewsById = async (id: string): Promise<ReviewServerType[]> => {
    try {

        return await Review.findById(id);
    } catch (error) {
        throwError()
    }
}

export const createReview = async ({
                                       authorAssessment,
                                       titleAbout,
                                       titleMain,
                                       tags,
                                       image,
                                       category,
                                       id, reviewText
                                   }: DataReviewType): Promise<ReviewServerType> => {
    try {
        const ratingLike = new RatingLike()
        const ratingStar = new RatingStar()
        const review = await new Review({
            idAuthor: id,
            image,
            authorAssessment,
            titleAbout,
            titleMain,
            tags,
            category,
            ratingLike,
            ratingStar,
            reviewText,
        })
        review.tag = tags.split(',');

        return await review.save()
    } catch (error) {
        throwError()
    }
}

export const sortReview = async (count: number, sort: any): Promise<ReviewServerType[]> => {
    try {
        const reviews = await Review.find({}).sort({data: sort})
        return reviews.slice(0, count)
    } catch (error) {
        throwError()
    }
}



