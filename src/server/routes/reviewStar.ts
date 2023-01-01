import {
    AppSettingsResponseType,
    Empty,
    ErrorResponseType,
    IdType,
    StarType,
    UserResponseType
} from "../../types";
import express from "express";
import { ErrorMessage, Path, Secret } from '../../enums'
import { checkAuth, createCookieOption, createTokenAndUserSend } from "../../utils";
import { getAppSetting, getUserById, setStar } from "../../server/repository";

const router = express.Router();

router.post<Empty, UserResponseType & AppSettingsResponseType | ErrorResponseType, StarType & IdType, Empty>(`${ Path.Root }`, checkAuth, async (req, res) => {
        try {
            const { idReview, numberStar, id } = req.body
            await setStar({ idReview, id, numberStar })
            const userBase = await getUserById(req.body.id)
            const { user, token } = createTokenAndUserSend(userBase)
            const appSettings = await getAppSetting()
            return res.cookie(Secret.NameToken, token, createCookieOption()).status(200).send({
                user,
                appSettings
            })
        } catch
            (error) {
            return res.status(401).send({ message: ErrorMessage.ServerError })
        }
    }
);

module.exports = router
