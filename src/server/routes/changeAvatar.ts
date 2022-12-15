import express from "express";
import { Empty, ErrorResponseType, IdType, UserResponseType } from "types";
import { ErrorMessage, Path, Secret } from '../../enums'
import { changeUser } from "../../server/repository";
import { checkAuth, createCookieOption, createToken, createUserSend } from "../../utils";

const upload = require('../amazonCloud/amazonCloud')

const router = express.Router();

const singleUpload = upload.single('file')

router.post<Empty, UserResponseType | ErrorResponseType, IdType, Empty>(`${Path.Root}`, singleUpload, checkAuth,  async (req: any, res) => {
    try {
        const id = req.body.id;
        if(req.file) {
            await singleUpload(req, res, async function(err, some) {
                if(req.file?.location) {

                    const userBase = await changeUser(id, {avatar: req.file.location})
                    console.log(userBase)
                    const token = createToken(userBase._id)
                    const user = createUserSend(userBase)
                    return res.cookie(Secret.NameToken, token, createCookieOption()).status(200).send({ user });
                } else {
                    return res.status(422).send({message: err.message  });
                }
            });
        }

    } catch (error) {
        return res.status(401).send({ message: ErrorMessage.Authorized })
    }
});

module.exports = router
