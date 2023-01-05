import { Empty, IdType, ResponseAppType } from "../../types";
import express from "express";
import { ErrorMessage, Path } from '../../enums'
import { checkAuth, createAppSettingsAndUserSend } from "../../utils";
import { addCategoryAppSettings } from "../repository";
import {} from "utils/createAppSettingsAndUserSend";


const router = express.Router();

router.post<Empty, ResponseAppType<Empty>, { category: string } & IdType, Empty>(`${Path.AddCategory}`, checkAuth, async (req, res) => {
        try {
            const { category, id } = req.body
            await addCategoryAppSettings(category)
            const { user, appSettings } = await createAppSettingsAndUserSend(id)
            return res.status(200).send({
                user,
                appSettings
            })
        } catch
            (error) {
            return res.status(500).send({ message: ErrorMessage.ServerError })
        }
    }
);

module.exports = router
