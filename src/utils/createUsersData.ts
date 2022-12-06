import {UserSendType } from "types";


export const createUsersData = (user: any): UserSendType => {
    const userInstance = JSON.parse(JSON.stringify(user))
    const {password, ...otherUserData} = userInstance
    return {...otherUserData}
}
