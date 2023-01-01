import { model, Schema } from 'mongoose';
import { Status, Rights } from "../enums";
import { UserServerType } from "types";

const userSchema = new Schema<UserServerType>({
    avatar: { type: String, default: null },
    login: { type: String, required: true,  },
    email: { type: String, required: true, unique: true,  },
    password: { type: String, required: true, select: false },
    status: { type: String, default: Status.Active, },
    rights: { type: String, default: Rights.User, },
    rating: { type: Number, default: 0 },
    __v: {type: Number, select: false}
}, {
    timestamps: true
});

export const User = model<UserServerType>('User', userSchema);
