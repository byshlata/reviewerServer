import { RightsType, StatusType } from "types";

export type UserInformationType = {
    avatar: string,
    login: string,
    email: string,
    password: string,
    createdAt: string,
    updatedAt: string,
    status: StatusType,
    rights: RightsType,
    rating: number
}

