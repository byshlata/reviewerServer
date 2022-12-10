import express from "express";
import { Empty, ErrorResponseType, IdType, UserResponseType } from "types";
import { ErrorMessage, Path, Secret} from '../../enums'
import { checkAuth, createToken, createCookieOption, createUserSend } from "../../utils";
import { authUser } from "../repository";


const router = express.Router();

router.get<Empty, UserResponseType | ErrorResponseType, IdType, Empty>(`${Path.Root}`, checkAuth, async (req, res) => {
    try {
        const userBase = await authUser(req.body.id)
        const token = createToken(userBase._id)
        const user = createUserSend(userBase)
        return user
        ? res.cookie(Secret.NameToken, token, createCookieOption()).status(200).send({ user })
        : res.status(401).send({ message: ErrorMessage.Authorized })
    } catch (error) {
        return res.status(401).send({ message: ErrorMessage.Authorized })
    }
});

module.exports = router
