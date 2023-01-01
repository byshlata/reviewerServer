import {
    AdminTableType,
    Empty,
    ErrorResponseType,
    IdSomeType,
    IdType,
    ResponseType,
    UsersSomeSendType
} from "../../types";
import express from "express";
import { ErrorMessage, Path, Secret } from '../../enums'
import {
    checkAuth,
    createAdminTableResponse,
    createCookieOption,
    createTokenAndUserSend
} from "../../utils";
import {
    changeRightsUsers,
    getAppSetting,
    getUserById,
    getUsers
} from "../../server/repository";

const router = express.Router();

router.post<Empty, ResponseType<UsersSomeSendType<AdminTableType>> | ErrorResponseType, IdSomeType & IdType, Empty>(`${Path.Root}`, checkAuth, async (req, res) => {
        try {
            const { idSome } = req.body
            const userBase = await getUserById(req.body.id)
            const { user, token } = createTokenAndUserSend(userBase)
            const appSettings = await getAppSetting()
            await changeRightsUsers({ idSome })
            const usersBase = await getUsers()
            const users = createAdminTableResponse(usersBase)
            return res.cookie(Secret.NameToken, token, createCookieOption()).status(200).send({
                user,
                appSettings,
                users
            })
        } catch
            (error) {
            return res.status(401).send({ message: ErrorMessage.ServerError })
        }
    }
);

module.exports = router
