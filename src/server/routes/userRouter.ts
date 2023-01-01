import {
    Empty,
    IdType,
    ResponseType,
    ReviewsSomeSendType,
    ReviewUserTableType
} from "../../types";
import express, { Request } from "express";
import { ErrorMessage, Path, Secret } from '../../enums'
import {
    createCookieOption,
    createTokenAndUserSend,
    createUserReviewsTableResponse
} from "../../utils";
import { getAppSetting, getReviewsUser, getUserById } from "../../server/repository";


const router = express.Router();

router.get<Empty, ResponseType<ReviewsSomeSendType<ReviewUserTableType>>, IdType, Empty>(`${Path.Root}${Path.Id}`, async (req: Request<{ id: string }>, res) => {
        try {
            const { id } = req.params
            const userBase = await getUserById(id)
            const reviewsBase = await getReviewsUser(id)
            const reviews = createUserReviewsTableResponse(reviewsBase)
            const { user } = createTokenAndUserSend(userBase)
            const appSettings = await getAppSetting()
            return res.status(200).send({
                user,
                appSettings,
                reviews
            })
        } catch
            (error) {
            return res.status(401).send({ message: ErrorMessage.ServerError })
        }
    }
)
;


module.exports = router
