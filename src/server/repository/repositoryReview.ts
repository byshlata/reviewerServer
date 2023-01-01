import {
    DataCommentType,
    DataReviewType,
    IdSomeType,
    IdType,
    LikeType,
    ReviewServerType,
    StarType
} from "types";
import { Comment, RatingLike, RatingStar, Review } from "../../models";
import {
    changeNameTags,
    countAverageRating,
    isStatusRating,
    throwError
} from "../../utils"
import mongoose from "mongoose";
import { setRating } from "../../server/repository";


export const getReviewsById = async (id: string): Promise<ReviewServerType> => {
    try {
        return await Review.findById({ _id: id }).populate('author').populate('comments.author');
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
                                       idUser,
                                       reviewText,
                                   }: DataReviewType): Promise<ReviewServerType> => {
    try {
        const ratingLike = new RatingLike()
        const ratingStar = new RatingStar()
        const review = await new Review({
            author: new mongoose.Types.ObjectId(idUser),
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
        review.tags = changeNameTags(tags.split(','));

        return await review.save()
    } catch (error) {
        throwError()
    }
}

export const sortReview = async (count: number, sort: any): Promise<ReviewServerType[]> => {
    try {
        const reviews = await Review.find({}).sort({ createdAt: sort }).populate('author')

        return reviews.slice(0, count)
    } catch (error) {
        throwError()
    }
}

export const searchByReview = async (searchText: string): Promise<{ titleMain: string, _id: string }[]> => {
    try {
        const reviews = await Review.find({ $text: { $search: searchText } }, { score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } }).limit(10)

        return reviews.map(review => ({ titleMain: review.titleMain, _id: review._id }))
    } catch (error) {
        throwError()
    }
}

export const searchByTag = async (tag: string): Promise<ReviewServerType[]> => {
    try {
        return await Review.find({ tags: { $in: [tag] } })
    } catch (error) {
        throwError()
    }
}

export const getReviewsUser = async (id: string): Promise<ReviewServerType[]> => {
    try {
        return await Review.find({ author: id })

    } catch (error) {
        throwError()
    }
}

export const deleteSomeReviews = async ({
                                            idSome,
                                            id
                                        }: IdSomeType & IdType): Promise<ReviewServerType[]> => {
    try {
        await Review.deleteMany({ _id: { $in: idSome } })
        return await getReviewsUser(id)
    } catch (error) {
        throwError()
    }
}

export const addComment = async ({
                                     textComment,
                                     id,
                                     idReview
                                 }: DataCommentType): Promise<ReviewServerType> => {
    try {
        const newComment = await new Comment({
            text: textComment,
            author: new mongoose.Types.ObjectId(id)
        })
        const review = await Review.findById({ _id: idReview }).populate('author').populate('comments.author')
        review.comments.push(newComment)
        return await review.save()
    } catch (error) {
        throwError()
    }
}

export const setLike = async ({
                                  idReview, id
                              }: LikeType & IdType): Promise<ReviewServerType> => {
    try {
        const review = await Review.findById({ _id: idReview })
        if (isStatusRating({ idUser: id, idUsers: review.ratingLike.idUsers })) {
            // @ts-ignore
            review.ratingLike.idUsers.pull(new mongoose.Types.ObjectId(id))
            review.ratingLike.countLike -= 1;
            await setRating({ idUser: review.author._id, value: -1 })
        } else {
            // @ts-ignore
            review.ratingLike.idUsers.push(new mongoose.Types.ObjectId(id))
            review.ratingLike.countLike += 1;
            await setRating({ idUser: review.author._id, value: 1 })
        }
        return await review.save()
    } catch (error) {
        throwError()
    }
}


export const setStar = async ({
                                  idReview, numberStar, id
                              }: StarType & IdType): Promise<ReviewServerType> => {
    try {
        const review = await Review.findById({ _id: idReview })
        const ratingNow = review.ratingStar.averageRating;
        const numberMark = review.ratingStar.idUsers.length;
        if (!isStatusRating({ idUser: id, idUsers: review.ratingStar.idUsers })) {
            review.ratingStar.averageRating = countAverageRating({
                ratingNow,
                numberMark,
                numberStar
            })
            // @ts-ignore
            review.ratingStar.idUsers.push(new mongoose.Types.ObjectId(id))
        }

        return await review.save()
    } catch (error) {
        throwError()
    }
}




