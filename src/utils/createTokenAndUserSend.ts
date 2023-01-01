import { UserSendType, UserServerType } from "types";
import { createToken, createUserSend } from "../utils";

export const createTokenAndUserSend = (user: UserServerType): { token: string, user: UserSendType } => ({
    user: createUserSend(user),
    token: createToken(user._id)
})
