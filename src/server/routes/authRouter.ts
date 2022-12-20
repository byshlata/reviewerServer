import express from "express";
import {
    AppSettingsResponseType,
    Empty,
    ErrorResponseType,
    IdType,
    UserResponseType
} from "types";
import { ErrorMessage, Path, Secret } from '../../enums'
import {
    checkAuth,
    createCookieOption,
    createToken,
    createUserSend,
    getAppSettingsHelper
} from "../../utils";
import { authUser } from "../../server/repository";

const router = express.Router();

router.get<Empty, UserResponseType & AppSettingsResponseType | ErrorResponseType, IdType, Empty>(`${Path.Root}`, checkAuth, async (req, res) => {
    try {
        const userBase = await authUser(req.body.id)
        const token = createToken(userBase._id)
        const user = createUserSend(userBase)
        const appSettings = await getAppSettingsHelper()
        return user
        ? res.cookie(Secret.NameToken, token, createCookieOption()).status(200).send({ user, appSettings  })
        : res.send({ user, appSettings  })
    } catch (error) {
        return res.status(401).send({ message: ErrorMessage.Authorized })
    }
});

module.exports = router
