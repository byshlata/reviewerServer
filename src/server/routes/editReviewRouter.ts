import { DataReviewType, Empty, ResponseAppType } from "types";
import express, { Request } from "express";
import { ErrorMessage, Path } from '../../enums'
import { checkAuth, createAppSettingsAndUserSend, } from "../../utils";
import { addTagsAppSettings, editReview } from "../repository";

require("dotenv").config();

const UploadFileAmazonCloud = require('../../server/amazonCloud/uploadFileAmazonCloud')

const router = express.Router();

const singleUpload = UploadFileAmazonCloud(process.env.AWS_PUBLIC_BUCKET_ARTICLE_IMG).single('file')

router.post<Empty, ResponseAppType<Empty>, Empty>(`${Path.Root}`, singleUpload, checkAuth, async (req: Request<Empty, Empty, DataReviewType & { idReview: string }, Empty> & { file: any }, res) => {
        try {
            const payload = req.body
            if (req.file) {
                await singleUpload(req, res, async function (err) {
                    if (req.file?.location) {
                        payload.image = req.file.location
                        await editReview(payload)
                    } else {

                        return res.status(422).send({ message: err.message });
                    }
                });
            } else {
                await editReview(payload)
            }
            await addTagsAppSettings(payload.tags.split(','))
            const { user, appSettings } = await createAppSettingsAndUserSend(req.body.id)

            return res.status(200).send({ appSettings, user });
        } catch
            (error) {
            return res.status(401).send({ message: ErrorMessage.ServerError })
        }
    }
);

module.exports = router
