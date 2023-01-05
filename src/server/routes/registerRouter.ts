import { createUser, getAppSetting } from "../repository";
import express from "express";
import { Empty, RegistrationType, ResponseAppType } from "types";
import { ErrorMessage, Path, Secret } from "../../enums";
import { registerValidation } from '../../validation/authValidation'
import { validationResult } from 'express-validator'
import { createCookieOption, createTokenAndUserSend, } from "../../utils";

const router = express.Router();

router.post<Empty, ResponseAppType<Empty>, RegistrationType, Empty>(`${Path.Root}`, registerValidation, async (req, res) => {
    try {
        const errors = validationResult(req.body);
        if (!errors.isEmpty()) {
            return res.status(400).send({ message: ErrorMessage.CorrectEnter })
        }
        const email = req.body.email;
        const login = req.body.login;
        const password = req.body.password;
        const userBase = await createUser({ login, password, email })
        const { user, token } = createTokenAndUserSend(userBase)
        const appSettings = await getAppSetting()

        return res
            .cookie(Secret.NameToken, token, createCookieOption())
            .status(200)
            .send({ user, appSettings })
    } catch (error) {
        return res.status(400).send({ message: ErrorMessage.EmailIsUse })
    }
});

module.exports = router
