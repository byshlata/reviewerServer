import { createUser, getAppSetting, getUserByEmail } from "../../server/repository";
import express from "express";
import {
    AppSettingsResponseType,
    Empty,
    ErrorResponseType,
    RegistrationType,
    UserResponseType
} from "types";
import { ErrorMessage, Path, Secret } from "../../enums";
import { registerValidation } from '../../validation/authValidation'
import { validationResult } from 'express-validator'
import { createCookieOption, createTokenAndUserSend } from "../../utils";

const router = express.Router();

router.post<Empty, UserResponseType & AppSettingsResponseType | ErrorResponseType, RegistrationType, Empty>(`${ Path.Root }`, registerValidation, async (req, res) => {
    try {
        const errors = validationResult(req.body);
        if (!errors.isEmpty()) {
            return res.status(400).send({ message: ErrorMessage.CorrectEnter })
        }
        const { email, login, password, avatar } = req.body

        let userBase = await getUserByEmail(email)
        if (!userBase) {
            userBase = await createUser({ login, password, email, avatar })
        }
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