import { AppSettingsSendType } from "types/AppSettingsSendType";

export type AppSettingsServerType = AppSettingsSendType & {
    _id: string;
    name: 'appSettings'
    createdAt: string;
    updatedAt: string;
    __v: number;
};
