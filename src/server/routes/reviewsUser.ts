import {
    AppSettingsResponseType,
    Empty,
    ErrorResponseType,
    IdType,
    ReviewResponseType, ReviewsSomeSendType, ReviewUserTableType
} from "../../types";
import express, { Request } from "express";
import { ErrorMessage, Path } from '../../enums'
import { getAppSetting, getReviewsUser } from "../../server/repository";
import { createUserReviewsTableResponse } from "../../utils";

const router = express.Router();

router.get<Empty, AppSettingsResponseType & ReviewsSomeSendType<ReviewUserTableType> | ErrorResponseType, IdType, Empty>(`${ Path.Root }${ Path.Id }`, async (req: Request<{ id: string }>, res) => {
        try {
            const { id } = req.params
            const reviewsBase = await getReviewsUser(id)
            const reviews = createUserReviewsTableResponse(reviewsBase)
            const appSettings = await getAppSetting()

            return res.send({ appSettings, reviews });
        } catch
            (error) {
            return res.status(401).send({ message: ErrorMessage.ServerError })
        }
    }
);

module.exports = router
