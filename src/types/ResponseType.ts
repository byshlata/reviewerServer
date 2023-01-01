import { AppSettingsResponseType, ErrorResponseType, UserResponseType } from "types";

export type ResponseType<T> = AppSettingsResponseType & UserResponseType & T | ErrorResponseType
