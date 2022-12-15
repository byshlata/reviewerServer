import express from "express";
import { Empty, ErrorResponseType, IdType, UserResponseType } from "types";
import { ErrorMessage, Path } from '../../enums'

const upload = require('../amazonCloud/amazonCloud')

const router = express.Router();

const singleUpload = upload.single('file')


router.post<Empty, UserResponseType | ErrorResponseType, IdType, Empty>(`${Path.Root}`, singleUpload, async (req: any, res) => {
    try {
        if(req.file) {
            await singleUpload(req, res, function(err, some) {
                if(req.file?.location) {
                    console.log(req.file.location)
                    return res.status(200).send({message: err.message  });
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
