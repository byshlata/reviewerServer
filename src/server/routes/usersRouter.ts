import {
    AdminTableType,
    Empty,
    ErrorResponseType,
    IdSomeType,
    IdType,
    ResponseAppType,
    UsersSomeSendType
} from "../../types";
import express from "express";
import { ErrorMessage, Path } from '../../enums'
import {
    changeRightsUsers,
    changeStatusUsers,
    deleteSomeUsers,
    getUsers
} from "../repository";
import {
    checkAuth,
    createAdminTableResponse,
    createAppSettingsAndUserSend
} from "../../utils";

const router = express.Router();

router.get<Empty, ResponseAppType<UsersSomeSendType<AdminTableType>> | ErrorResponseType, IdType, Empty>(`${Path.Root}`, checkAuth, async (req, res) => {
        try {
            const usersBase = await getUsers()
            const users = createAdminTableResponse(usersBase)
            const { user, appSettings } = await createAppSettingsAndUserSend(req.body.id)

            return res.status(200).send({
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

router.post<Empty, ResponseAppType<UsersSomeSendType<AdminTableType>>, IdSomeType & IdType, Empty>(`${Path.ChangeStatus}`, checkAuth, async (req, res) => {
        try {
            const { idSome } = req.body
            const usersBase = await changeStatusUsers({ idSome })
            const users = createAdminTableResponse(usersBase)
            const { user, appSettings } = await createAppSettingsAndUserSend(req.body.id)

            return res.status(200).send({
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

router.post<Empty, ResponseAppType<UsersSomeSendType<AdminTableType>>, IdSomeType & IdType, Empty>(`${Path.ChangeRights}`, checkAuth, async (req, res) => {
        try {
            const { idSome } = req.body
            await changeRightsUsers({ idSome })
            const usersBase = await getUsers()
            const users = createAdminTableResponse(usersBase)
            const { user, appSettings } = await createAppSettingsAndUserSend(req.body.id)

            return res.status(200).send({
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


router.delete<Empty, ResponseAppType<UsersSomeSendType<AdminTableType>>, IdSomeType & IdType, Empty>(`${Path.Delete}`, checkAuth, async (req, res) => {
        try {
            const { idSome, id } = req.body;
            const usersBase = await deleteSomeUsers({ idSome })
            const users = createAdminTableResponse(usersBase)
            const { user, appSettings } = await createAppSettingsAndUserSend(id)

            return res.status(200).send({
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
