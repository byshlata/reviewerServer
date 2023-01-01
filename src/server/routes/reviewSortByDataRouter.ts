import {
    AppSettingsResponseType,
    Empty,
    ErrorResponseType,
    IdType,
    ReviewSendShortType,
    ReviewsSomeSendType,
    SortQueryParamsType
} from "../../types";
import express, { Request } from "express";
import { ErrorMessage, Path, QueryAPI } from '../../enums'
import { getAppSetting, sortReview } from "../../server/repository";
import { createReviewSendShort } from "../../utils";

const router = express.Router();

router.get<Empty, AppSettingsResponseType & ReviewsSomeSendType<ReviewSendShortType> | ErrorResponseType, IdType, Empty>(`${ Path.ReviewsSortData }`, async (req: Request<Empty, Empty, IdType, SortQueryParamsType>, res) => {
        try {
            const { query } = req
            const reviews = await sortReview(query[QueryAPI.Count], query[QueryAPI.Sort])
            const reviewsSend = reviews.map(review => createReviewSendShort(review))
            const appSettings = await getAppSetting()

            return res.send({ appSettings, reviews: reviewsSend });
        } catch
            (error) {
            return res.status(401).send({ message: ErrorMessage.ServerError })
        }
    }
);

module.exports = router
