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
    deleteSomeUsers,
    getAppSetting,
    getUserById,
    getUsers
} from "../../server/repository";
import {
    checkAuth,
    createAdminTableResponse,
    createCookieOption,
    createTokenAndUserSend
} from "../../utils";

const router = express.Router();

router.get<Empty, ResponseType<UsersSomeSendType<AdminTableType>> | ErrorResponseType, IdType, Empty>(`${Path.Root}`, checkAuth, async (req, res) => {
        try {
            const userBase = await getUserById(req.body.id)
            const { user, token } = createTokenAndUserSend(userBase)
            const appSettings = await getAppSetting()
            const usersBase = await getUsers()
            const users = createAdminTableResponse(usersBase)

            return res.cookie(Secret.NameToken, token, createCookieOption()).status(200).send({
                user,
                appSettings,
                users
            });
        } catch
            (error) {
            return res.status(401).send({ message: ErrorMessage.ServerError })
        }
    }
);

router.delete<Empty, ResponseType<UsersSomeSendType<AdminTableType>> | ErrorResponseType, IdSomeType & IdType, Empty>(`${Path.Root}`, checkAuth, async (req, res) => {
        try {
            const { idSome, id } = req.body;
            const userBase = await getUserById(id)
            const { user, token } = createTokenAndUserSend(userBase)
            const usersBase = await deleteSomeUsers({ idSome })
            const users = createAdminTableResponse(usersBase)
            const appSettings = await getAppSetting()

            return res.cookie(Secret.NameToken, token, createCookieOption()).status(200).send({
                user,
                appSettings,
                users
            });
        } catch
            (error) {
            return res.status(401).send({ message: ErrorMessage.ServerError })
        }
    }
);

module.exports = router
