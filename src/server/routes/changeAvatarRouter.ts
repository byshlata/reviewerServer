import express from "express";
import { Empty, IdType, ResponseAppType } from "types";
import { ErrorMessage, Path } from '../../enums'
import { checkAuth, createAppSettingsAndUserSend } from "../../utils";

const UploadFileAmazonCloud = require('../../server/amazonCloud/uploadFileAmazonCloud')
const router = express.Router();

const singleUpload = UploadFileAmazonCloud(process.env.AWS_PUBLIC_BUCKET_AVATAR_IMG).single('file')

router.post<Empty, ResponseAppType<Empty>, IdType, Empty>(`${Path.Root}`, singleUpload, checkAuth, async (req: any, res) => {
    try {
        if (req.file) {
            await singleUpload(req, res, async function (err, some) {
                if (req.file?.location) {
                    const { user, appSettings } = await createAppSettingsAndUserSend(req.body.id)

                    return res.status(200).send({
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
