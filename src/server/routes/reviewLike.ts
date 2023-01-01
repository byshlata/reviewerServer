import {
    AppSettingsResponseType,
    Empty,
    ErrorResponseType,
    IdType,
    LikeType,
    UserResponseType
} from "../../types";
import express from "express";
import { ErrorMessage, Path, Secret } from '../../enums'
import { checkAuth, createCookieOption, createTokenAndUserSend } from "../../utils";
import { getAppSetting, getUserById, setLike } from "../../server/repository";

const router = express.Router();

router.post<Empty, UserResponseType & AppSettingsResponseType | ErrorResponseType, LikeType & IdType, Empty>(`${ Path.Root }`, checkAuth, async (req, res) => {
        try {
            const { idReview, id } = req.body
            await setLike({ idReview, id })
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
