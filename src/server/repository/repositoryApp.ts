import { AppSettingsServerType, } from "types";
import { changeNameTags, createCategory, throwError } from "../../utils"
import { AppSettings } from "../../models";
import { AppSettingsEnum } from "../../enums";

export const getAppSetting = async (): Promise<AppSettingsServerType> => {
    try {
        const appSettings = await AppSettings.findOne({ name: AppSettingsEnum.AppSettings });
         if (appSettings) {

            return await appSettings
        } else {
            const startAppSettings = new AppSettings();

            return await startAppSettings.save()
        }
    } catch (error) {
        throwError()
    }
}

export const addCategoryAppSettings = async (category: string): Promise<AppSettingsServerType> => {
    try {
        const appSettings = await AppSettings.findOne({ name: AppSettingsEnum.AppSettings });
        const categoryByType = createCategory(category)
        appSettings.category = Array.from(new Set([ ...appSettings.category, categoryByType ]))

        return await appSettings.save()
    } catch (error) {
        throwError()
    }
}

export const addTagsAppSettings = async (tags: string[]): Promise<AppSettingsServerType> => {
    try {
        const tagsForBase = changeNameTags(tags)
        const appSettings = await AppSettings.findOne({ name: AppSettingsEnum.AppSettings });
        appSettings.tags = Array.from([ ...appSettings.tags, ...tagsForBase ])

        return await appSettings.save()
    } catch (error) {
        throwError()
    }
}

export const addAppSettings = async (category: string, tags: string[]): Promise<AppSettingsServerType> => {
    try {
        await addCategoryAppSettings(category)
        await addTagsAppSettings(tags)

        return await getAppSetting()
    } catch (error) {
        throwError()
    }
}

