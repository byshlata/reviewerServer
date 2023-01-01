import { LoginType } from "types/LoginType";

export type RegistrationType = LoginType & {
    login: string,
    avatar?: string
}
