import { UserSendType, UserServerType } from "types";

export const createUserSend = (user: UserServerType): UserSendType => {
    const {
        _id,
        password,
        ...otherInformation
    } = JSON.parse(JSON.stringify(user)) as UserServerType
    return { id: _id, ...otherInformation }
}
