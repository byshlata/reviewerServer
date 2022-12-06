import { model, Schema } from 'mongoose';
import { Status, Rights } from "../enums";
import { UserServerType } from "types";

const userSchema = new Schema<UserServerType>({
    login: { type: String, required: true,  },
    email: { type: String, required: true, unique: true,  },
    password: { type: String, required: true,  },
    status: { type: String, required: true, default: Status.Active, },
    rights: {type: String, required: true, default: Rights.User, }
}, {
    timestamps: true
});

export const User = model<UserServerType>('User', userSchema);
