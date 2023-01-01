import {
    ChangeUserType, IdSomeType, IdType,
    LoginType,
    Nullable,
    RegistrationType,
    UserServerType
} from "types";
import { User } from "../../models";
import { throwError } from "../../utils"
import { Rights, Secret, Status } from "../../enums";

const bcrypt = require("bcrypt");

export const getUserByEmail = async (email: string): Promise<UserServerType> => {
    try {

        return await User.findOne({ email: new RegExp(email) });
    } catch (error) {
        throwError()
    }
}

export const getUserPasswordByEmail = async (email: string): Promise<UserServerType> => {
    try {

        return await User.findOne({ email: new RegExp(email) }).select('password');
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
        const user = await getUserPasswordByEmail(payload.email)
        if (user) {
            const isValidPassword = await bcrypt.compare(payload.password, user.password);

            return isValidPassword ? await getUserByEmail(payload.email) : throwError()
        } else {

            return null
        }
    } catch (error) {
        throwError()
    }
}

export const changeUser = async (id: string, {
    avatar,
    rating
}: ChangeUserType): Promise<Nullable<UserServerType>> => {
    try {
        return await User.findByIdAndUpdate(id, {
            avatar: avatar,
            rating: rating
        }, { new: true })
    } catch (error) {
        return null
    }
}

export const setRating = async ({
                                    value,
                                    idUser
                                }: { idUser: string, value: number }): Promise<void> => {
    try {
        await User.findByIdAndUpdate({ _id: idUser }, { $inc: { rating: value } })
    } catch (error) {
        throwError()
    }
}

export const getUsers = async (): Promise<UserServerType[]> => {
    try {

        return await User.find({});
    } catch (error) {
        throwError()
    }
}


export const deleteSomeUsers = async ({
                                          idSome
                                      }: IdSomeType): Promise<UserServerType[]> => {
    try {
        await User.deleteMany({ _id: { $in: idSome } })
        return await getUsers()
    } catch (error) {
        throwError()
    }
}

export const changeStatusUsers = async ({
                                            idSome
                                        }: IdSomeType): Promise<UserServerType[]> => {
    try {
        const users = await User.find({ _id: { $in: idSome } }).lean()
        for (let i = 0; i < users.length; i += 1) {
            await changeStatus({id: users[i]._id })
        }
        return await getUsers()
    } catch (error) {
        throwError()
    }
}

export const changeRightsUsers = async ({
                                            idSome
                                        }: IdSomeType): Promise<UserServerType[]> => {
    try {
        const users = await User.find({ _id: { $in: idSome } })
        for (let i = 0; i < users.length; i += 1) {
            await changeRights({id: users[i]._id })
        }
        return await getUsers()
    } catch (error) {
        throwError()
    }
}

const changeStatus = async ({ id }: IdType): Promise<void> => {
    try {
        const user = await User.findById({ _id: id })
        if (user.status === Status.Active) {
            user.status = Status.Block
        } else {
            user.status = Status.Active
        }
        await user.save()
    } catch (error) {
        throwError()
    }
}

const changeRights = async ({ id }: IdType): Promise<UserServerType> => {
    try {
        const user = await User.findById({ _id: id })
        if (user.rights === Rights.User) {
            user.rights = Rights.Admin
        } else {
            user.rights = Rights.User
        }
        return await user.save()
    } catch (error) {
        throwError()
    }
}
