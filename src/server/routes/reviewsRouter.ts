import {
    AppSettingsResponseType,
    Empty, ErrorResponseType,
    IdType,
    ResponseAppType,
    ReviewSendShortType,
    ReviewsSomeSendType,
    SortQueryParamsType
} from "../../types";
import express, { Request } from "express";
import { ErrorMessage, Path, QueryAPI } from '../../enums'
import { getAppSetting, searchByTag, sortByData, sortByRating } from "../repository";
import { createReviewSendShort } from "../../utils";

const router = express.Router();

router.get<Empty, ReviewsSomeSendType<ReviewSendShortType> & AppSettingsResponseType | ErrorResponseType, IdType, Empty>(`${Path.Root}`, async (req: Request<Empty, Empty, IdType, SortQueryParamsType>, res) => {
        try {
            const { query } = req
            let reviewsSortData = [];
            let reviewsSortRating = [];
            let reviewsTag = [];
            if (query[QueryAPI.Data]) {
                reviewsSortData = await sortByData({
                    count: query[QueryAPI.Count],
                    sort: query[QueryAPI.Data]
                })
            }

            if (query[QueryAPI.Rating]) {
                reviewsSortRating = await sortByRating({
                    count: query[QueryAPI.Count],
                    sort: query[QueryAPI.Rating]
                })
            }

            if (query[QueryAPI.Tag]) {
                reviewsTag = await searchByTag(query[QueryAPI.Tag])
            }

            const reviewSortBase = [...reviewsSortData, ...reviewsSortRating, ...reviewsTag]
            const reviews = reviewSortBase.map(review => createReviewSendShort(review))
            const appSettings = await getAppSetting()

            return res.send({ appSettings, reviews });
        } catch
            (error) {
            return res.status(401).send({ message: ErrorMessage.ServerError })
        }
    }
);

module.exports = router
