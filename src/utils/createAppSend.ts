import { AppSettingsSendType, AppSettingsServerType } from "types";

export const createAppSend = (appSettings: AppSettingsServerType): AppSettingsSendType => {
    const {_id, _v, createdAt, updatedAt, ...otherInformation} = JSON.parse(JSON.stringify(appSettings)) as AppSettingsServerType
    return {...otherInformation}
}
