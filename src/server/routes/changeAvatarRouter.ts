import express from "express";
import { changeUser, getAppSetting } from "../repository";
import { Empty, IdType, ResponseAppType } from "types";
import { ErrorMessage, Path, Secret } from '../../enums'
import { checkAuth, createCookieOption, createTokenAndUserSend } from "../../utils";

const UploadFileAmazonCloud = require('../../server/amazonCloud/uploadFileAmazonCloud')
const router = express.Router();

const singleUpload = UploadFileAmazonCloud(process.env.AWS_PUBLIC_BUCKET_AVATAR_IMG).single('file')

router.post<Empty, ResponseAppType<Empty>, IdType, Empty>(`${Path.Root}`, singleUpload, checkAuth, async (req: any, res) => {
    try {
        const { id }= req.body
        if (req.file) {
            await singleUpload(req, res, async function (err, some) {
                if (req.file?.location) {
                    const userBase = await changeUser(id, { avatar: req.file.location })
                    const { user, token } = createTokenAndUserSend(userBase)
                    const appSettings = await getAppSetting()

                    return res.cookie(Secret.NameToken, token, createCookieOption()).status(200).send({
                        user,
                        appSettings
                    });
                } else {

                    return res.status(422).send({ message: err.message });
                }
            });
        }
    } catch (error) {

        return res.status(401).send({ message: ErrorMessage.Authorized })
    }
});

module.exports = router
