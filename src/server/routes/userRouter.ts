import {
    Empty,
    IdType,
    ResponseAppType,
    ReviewsSomeSendType,
    ReviewUserTableType, UserSendType
} from "../../types";
import express, { Request } from "express";
import { ErrorMessage, Path } from '../../enums'
import {
    checkAuth,
    createAppSettingsAndUserSend,
    createUserReviewsTableResponse, createUserSend
} from "../../utils";
import { getReviewsUser, getUserById } from "../repository";


const router = express.Router();

router.get<Empty, ResponseAppType<ReviewsSomeSendType<ReviewUserTableType > & { userOther: UserSendType }> , IdType, Empty>(`${Path.Root}${Path.Id}`, checkAuth, async (req: Request<{ id: string }>, res) => {
        try {
            const { id } = req.params
            const reviewsBase = await getReviewsUser(id)
            const reviews = createUserReviewsTableResponse(reviewsBase)
            const { user, appSettings } = await createAppSettingsAndUserSend(req.body.id)
            const userOtherBase = await getUserById(id)
            const userOther = createUserSend(userOtherBase)
            return res.status(200).send({
                user,
                userOther,
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
