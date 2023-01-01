import {
    AppSettingsResponseType,
    Empty,
    ErrorResponseType, IdSomeType,
    IdType,
    ReviewResponseType, ReviewsSomeSendType, ReviewUserTableType
} from "../../types";
import express, { Request } from "express";
import { ErrorMessage, Path } from '../../enums'
import { checkAuth, createReviewSend, createUserReviewsTableResponse } from "../../utils";
import {
    getReviewsById,
    getAppSetting,
    deleteSomeReviews
} from "../../server/repository";


const router = express.Router();

router.get<Empty, AppSettingsResponseType & ReviewResponseType | ErrorResponseType, IdType, Empty>(`${ Path.Root }${ Path.Id }`, async (req: Request<{ id: string }>, res) => {
        try {
            const { id } = req.params
            const review = await getReviewsById(id)
            const reviewSend = createReviewSend(review)
            const appSettings = await getAppSetting()

            return res.send({ appSettings, review: reviewSend });
        } catch
            (error) {
            return res.status(401).send({ message: ErrorMessage.ServerError })
        }
    }
);

router.delete<Empty, AppSettingsResponseType & ReviewsSomeSendType<ReviewUserTableType> | ErrorResponseType, IdSomeType & IdType, Empty>(`${ Path.Root }`, checkAuth, async (req, res) => {
        try {
            const { idSome, id } = req.body;
            const reviews = await deleteSomeReviews({ idSome, id})
            const reviewsSend = createUserReviewsTableResponse(reviews)
            const appSettings = await getAppSetting()

            return res.send({ appSettings, reviews: reviewsSend });
        } catch
            (error) {
            return res.status(401).send({ message: ErrorMessage.ServerError })
        }
    }
);

module.exports = router
