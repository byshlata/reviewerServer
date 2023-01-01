import { UserInformationType } from "types";

export type UserServerType = UserInformationType & {
    _id: string,
    __v: number
}

