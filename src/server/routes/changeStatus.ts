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
import { ErrorMessage, Path, Secret, Status } from '../../enums'
import {
    checkAuth,
    createAdminTableResponse,
    createCookieOption,
    createTokenAndUserSend
} from "../../utils";
import {
    changeStatusUsers,
    getAppSetting,
    getUserById,
    getUsers
} from "../../server/repository";

const router = express.Router();

router.post<Empty, ResponseType<UsersSomeSendType<AdminTableType>> | ErrorResponseType, IdSomeType & IdType, Empty>(`${Path.Root}`, checkAuth, async (req, res) => {
        try {
            const { idSome } = req.body
            const userBase = await getUserById(req.body.id)
            let { user, token } = createTokenAndUserSend(userBase)
            if(user.status === Status.Block) {
                user = null
            }
            const appSettings = await getAppSetting()
            const usersBase = await changeStatusUsers({ idSome })
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
