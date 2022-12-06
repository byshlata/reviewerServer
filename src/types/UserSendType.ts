import { UserInformationType } from "types";

export type UserSendType = Omit<UserInformationType, 'password'> & {
    id: string,
}

