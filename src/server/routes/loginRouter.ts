import { loginUser } from "../repository";
import express from "express";
import { Empty, ErrorResponseType, LoginType, UserResponseType } from "types";
import { ErrorMessage, Path, Secret } from '../../enums/'
import { loginValidation } from '../../validation/authValidation'
import { validationResult } from 'express-validator'
import { checkAuth, createCookieOption, createToken, createUserSend } from "../../utils";


const router = express.Router();

router.post<Empty, UserResponseType | ErrorResponseType, LoginType, Empty>(`${Path.Root}`, loginValidation, async (req, res) => {
    try {
        const errors = validationResult(req.body);
        if (!errors.isEmpty()) {
            return res.status(400).send({message: ErrorMessage.CorrectEnter})
        }
        const email = req.body.email;
        const password = req.body.password;
        const userBase = await loginUser({password, email})
        if (userBase) {
            const token = createToken(userBase._id)
            const user = createUserSend(userBase)

            return user.status === 'block'
                ? res.status(403).send({
                    message: ErrorMessage.Block,
                    auth: false
                })
                : res.status(200).cookie(Secret.NameToken, token, createCookieOption()).send({user})
        }
        return res.status(400).send({message: ErrorMessage.EmailOrPassword})
    } catch (error) {
        return res.status(400).send({message: ErrorMessage.EmailOrPassword})
    }
});

module.exports = router
