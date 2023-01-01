import { UserSendShortType, UserServerType } from "types";

export const createUsersByComment = (user: any): UserSendShortType => {
    const userInstance = JSON.parse(JSON.stringify(user)) as UserServerType
    const {
        password,
        createdAt,
        email,
        _id,
        updatedAt,
        __v,
        status,
        rights,
        ...otherUserData
    } = userInstance
    return { id: _id, ...otherUserData }
}
