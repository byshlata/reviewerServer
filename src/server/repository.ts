import {
    LoginType,
    Nullable, RegistrationType, UserServerType,
} from "types";
import { User } from "../models/user";
import { throwError } from "../utils/throwError"
import { Secret } from "../enums";

const bcrypt = require("bcrypt");

export const getUserByEmail = async (email: string): Promise<UserServerType> => {
    try {
        return await User.findOne({ email: new RegExp(email) });
    } catch (error) {
        throwError()
    }
}

export const getUserById = async (id: string): Promise<UserServerType> => {
    try {
        return await User.findById(id);
    } catch (error) {
        throwError()
    }
}

export const createUser = async (payload: RegistrationType): Promise<UserServerType> => {
    try {
        const userNew = { ...payload };
        const salt = await bcrypt.genSalt(Secret.Salt);
        userNew.password = await bcrypt.hash(userNew.password, salt)
        const user = new User({ ...userNew });

        return await user.save();
    } catch (error) {
        throwError()
    }
}

export const loginUser = async (payload: LoginType): Promise<UserServerType> => {
    try {
        const user = await getUserByEmail(payload.email)
        if (user) {
            const isValidPassword = await bcrypt.compare(payload.password, user.password);

            return isValidPassword ? user : throwError()
        } else {

            return null
        }
    } catch (error) {
        throwError()
    }
}

export const authUser = async (id: string): Promise<Nullable<UserServerType>> => {
    try {
        const user = await getUserById(id)

        return user ? await user : null

    } catch (error) {
        return null
    }
}

