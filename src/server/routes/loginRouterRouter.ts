import { getAppSetting, loginUser } from "../repository";
import express from "express";
import { Empty, LoginType, ResponseAppType } from "types";
import { ErrorMessage, Path, Secret } from '../../enums/'
import { loginValidation } from '../../validation/authValidation'
import { validationResult } from 'express-validator'
import { createCookieOption, createTokenAndUserSend } from "../../utils";

const router = express.Router();

router.post<Empty, ResponseAppType<Empty>, LoginType, Empty>(`${ Path.Root }`, loginValidation, async (req, res) => {
    try {
        const errors = validationResult(req.body);
        if (!errors.isEmpty()) {
            return res.status(400).send({ message: ErrorMessage.CorrectEnter })
        }
        const email = req.body.email;
        const password = req.body.password;
        const userBase = await loginUser({ password, email })
        if (userBase) {
            const { user, token } = createTokenAndUserSend(userBase)
            const appSettings = await getAppSetting()

            return user.status === 'block'
                ? res.status(403).send({
                    message: ErrorMessage.Block,
                    auth: false
                })
                : res.status(200).cookie(Secret.NameToken, token, createCookieOption()).send({
                    user,
                    appSettings
                })
        }

        return res.status(400).send({ message: ErrorMessage.EmailOrPassword })
    } catch (error) {

        return res.status(500).send({ message: ErrorMessage.ServerError })
    }
});

module.exports = router
