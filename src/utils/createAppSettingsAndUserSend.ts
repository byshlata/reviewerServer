import { AppSettingsServerType, UserSendType } from "types";
import { createUserSend } from "../utils";
import { getAppSetting, getUserById } from "../server/repository";

export const createAppSettingsAndUserSend = async (idUser: string): Promise<{ appSettings: AppSettingsServerType, user: UserSendType }> => {
    const userBase = await getUserById(idUser)
    return {
        user: createUserSend(userBase),
        appSettings: await getAppSetting()
    }

}

