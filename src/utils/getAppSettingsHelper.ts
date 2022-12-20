import { AppSettingsSendType } from "types";
import { getAppSetting } from "../server/repository";
import { createAppSend } from "../utils";

export const getAppSettingsHelper = async (): Promise<AppSettingsSendType> => {
    const appSettingsBase = await getAppSetting()
    return createAppSend(appSettingsBase)
}
