import {
    AppSettingsResponseType,
    Empty,
    ErrorResponseType,
    IdType,
    ReviewSendShortType,
    ReviewsSomeSendType
} from "../../types";
import express from "express";
import { ErrorMessage, Path } from '../../enums'
import { getAppSetting, searchByTag } from "../../server/repository";
import { createReviewSendShort } from "../../utils";

const router = express.Router();

router.post<Empty, AppSettingsResponseType & ReviewsSomeSendType<ReviewSendShortType> | ErrorResponseType, IdType & { tag: string }, Empty>(`${Path.Root}`, async (req, res) => {
        try {
            const { tag } = req.body
            const reviews = await searchByTag(tag)
            const appSettings = await getAppSetting()
            const reviewsSend = reviews.map(review => createReviewSendShort(review))
            return res.send({ reviews: reviewsSend, appSettings });
        } catch
            (error) {
            console.log(error.message)
            return res.status(401).send({ message: ErrorMessage.ServerError })
        }
    }
);

module.exports = router
