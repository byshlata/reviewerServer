import { AppSettingsResponseType, ErrorResponseType, UserResponseType } from "types";

export type ResponseAppType<T> = AppSettingsResponseType & UserResponseType & T | ErrorResponseType
