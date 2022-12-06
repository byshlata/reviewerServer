import { createDataLiveCookie } from "../utils";
import { CookieOptions } from "express-serve-static-core";

export const createCookieOption = (): CookieOptions => ({
    expires: createDataLiveCookie(),
    secure: true,
    httpOnly: true,
    sameSite: 'none'
})