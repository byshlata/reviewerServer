import {
    AppSettingsResponseType,
    DataCommentType,
    Empty,
    ErrorResponseType,
    ReviewResponseType
} from "types";
import express from "express";
import { ErrorMessage, Path, Secret } from '../../enums'
import {
    checkAuth,
    createCookieOption,
    createToken,
    createReviewSend
} from "../../utils";
import { addComment, getAppSetting } from "../../server/repository";


const router = express.Router();

router.post<Empty, AppSettingsResponseType & ReviewResponseType | ErrorResponseType, DataCommentType, Empty>(`${ Path.Root }`, checkAuth, async (req, res) => {
        try {
            const { id, textComment, idReview } = req.body;
            if (id) {
                const review = await addComment({ id, textComment, idReview })
                const reviewSend = createReviewSend(review)
                const token = createToken(id)
                const appSettings = await getAppSetting()

                return res.cookie(Secret.NameToken, token, createCookieOption()).status(200).send({
                    appSettings,
                    review: reviewSend
                });
            }
        } catch
            (error) {
            return res.status(401).send({ message: ErrorMessage.Authorized })
        }
    }
);

module.exports = router;
