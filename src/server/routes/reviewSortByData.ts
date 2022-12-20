import {
    AppSettingsResponseType,
    Empty,
    ErrorResponseType,
    IdType,
    ReviewsSomeSendType,
    SortQueryParamsType
} from "../../types";
import express, { Request } from "express";
import { ErrorMessage, Path, QueryAPI, Secret } from '../../enums'
import {
    checkAuth,
    createCookieOption,
    createToken,
    getAppSettingsHelper
} from "../../utils";
import { sortReview } from "../../server/repository/repositoryReview";

const router = express.Router();

router.get<Empty, AppSettingsResponseType & ReviewsSomeSendType | ErrorResponseType, IdType, Empty>(`${Path.ReviewsSortData}`, checkAuth, async (req: Request<{}, {}, IdType, SortQueryParamsType>, res) => {
        try {
            console.log('query')
            const { query } = req
            const token = createToken(req.body.id)
            const reviews = await sortReview(query[QueryAPI.Count], query[QueryAPI.Sort])

            const appSettings = await getAppSettingsHelper()

            return res.cookie(Secret.NameToken, token, createCookieOption()).status(200).send({appSettings, reviews});
        } catch
            (error) {
            return res.status(401).send({message: ErrorMessage.Authorized})
        }
    }
);

module.exports = router
