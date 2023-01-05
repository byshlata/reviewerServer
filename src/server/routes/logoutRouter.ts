import express from "express";
import { Empty, IdType, ResponseAppType } from "types";
import { ErrorMessage, Path, Secret } from '../../enums'
import { checkAuth, createCookieOption } from "../../utils";
import { getAppSetting } from "../repository";


const router = express.Router();

router.post<Empty, ResponseAppType<Empty>, IdType, Empty>(`${ Path.Root }`, checkAuth, async (req, res) => {
    try {
        const appSettings = await getAppSetting()

        return res.cookie(Secret.NameToken, 0, createCookieOption()).status(200).send({ user: null, appSettings })
    } catch (error) {
        return res.status(500).send({ message: ErrorMessage.ServerError })
    }
});

module.exports = router
