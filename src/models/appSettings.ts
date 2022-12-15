import { model, Schema } from 'mongoose';
import { AppSettingsType } from "types";

const appSettingsSchema = new Schema<AppSettingsType>({
    category: { type: [String], required: true, default: ['Movies', 'Books', 'Foods', 'Jobs', 'Other',] },
    tags: { type: [String],   }
}, {
    timestamps: true
});

export const AppSettings = model<AppSettingsType>('UsAppSettings', appSettingsSchema);
