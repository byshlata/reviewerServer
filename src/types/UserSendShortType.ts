import { UserInformationType } from "types";

export type UserSendShortType = Omit<UserInformationType, 'password'|'status'|'email'|'createdAt'|'updatedAt'|'rights'> & {
    id: string,
}

