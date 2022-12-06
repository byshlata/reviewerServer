import { IdType } from "types";

export type UserLoginType = IdType & {
    email: string,
    password: string,
}
