import { AppSettingsResponseType, DataReviewType, Empty, ErrorResponseType } from "types";
import express, { Request } from "express";
import { ErrorMessage, Path, Secret } from '../../enums'
import { checkAuth, createCookieOption, createToken, } from "../../utils";
import { addTagsAppSettings, createReview, getAppSetting } from "../../server/repository";

require("dotenv").config();

const UploadFileAmazonCloud = require('../../server/amazonCloud/uploadFileAmazonCloud')

const router = express.Router();

const singleUpload = UploadFileAmazonCloud(process.env.AWS_PUBLIC_BUCKET_ARTICLE_IMG).single('file')

router.post<Empty, AppSettingsResponseType | ErrorResponseType, DataReviewType, Empty>(`${ Path.Root }`, singleUpload, checkAuth, async (req: Request<Empty, Empty, DataReviewType, Empty> & { file: any }, res) => {
        try {

            const id = req.body.id;
            const payload = req.body
            const token = createToken(id)
            if (req.file) {
                await singleUpload(req, res, async function (err) {
                    if (req.file?.location) {
                        payload.image = req.file.location
                        await createReview(payload)
                    } else {
                        return res.status(422).send({ message: err.message });
                    }
                });
            } else {
                await createReview(payload)
            }
            await addTagsAppSettings(payload.tags.split(','))
            const appSettings = await getAppSetting()

            return res.cookie(Secret.NameToken, token, createCookieOption()).status(200).send({ appSettings });
        } catch
            (error) {
            return res.status(401).send({ message: ErrorMessage.ServerError })
        }
    }
);

module.exports = router
