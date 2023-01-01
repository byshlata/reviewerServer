import { model, Schema } from 'mongoose';
import { AppSettingsServerType } from "types";
import { AppSettingsEnum } from '../enums'


const appSettingsSchema = new Schema<AppSettingsServerType>({
    name: { type: String, required: true, default: AppSettingsEnum.AppSettings },
    category: {
        type: [ String ],
        required: true,
        default: [ 'Movies', 'Books', 'Foods', 'Jobs', 'Other', ]
    },
    tags: { type: [ String ], },
    __v: { type: Number, select: false },
    createdAt: { type: String, select: false },
    updatedAt: { type: String, select: false },
}, {
    timestamps: true
});

export const AppSettings = model<AppSettingsServerType>('AppSettings', appSettingsSchema);
