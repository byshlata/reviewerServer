import express from "express";
import { Empty, ErrorResponseType, IdType } from "types";
import { ErrorMessage, Path, Secret } from '../../enums'
import { checkAuth, createCookieOption } from "../../utils";


const router = express.Router();

router.get<Empty, ErrorResponseType, IdType, Empty>(`${Path.Root}`, checkAuth, async (req, res) => {
    try {
        return res.cookie(Secret.NameToken, 0, createCookieOption()).status(200).send({ message: ErrorMessage.Success })
    } catch (error) {
        return res.status(500).send({ message: ErrorMessage.ServerError })
    }
});

module.exports = router
