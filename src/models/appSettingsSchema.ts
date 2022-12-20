import { model, Schema } from 'mongoose';
import { AppSettingsServerType } from "types";
import { AppSettingsEnum } from '../enums'


const appSettingsSchema = new Schema<AppSettingsServerType>({
    name: {type: String, required: true, default: AppSettingsEnum.AppSettings },
    category: { type: [String], required: true, default: ['Movies', 'Books', 'Foods', 'Jobs', 'Other',] },
    tags: { type: [String],   }
}, {
    timestamps: true
});

export const AppSettings = model<AppSettingsServerType>('AppSettings', appSettingsSchema);
