import { CommentServerType, UserSendType } from "types";

export type CommentSendType = Omit<CommentServerType, '_id'|'__v'|'author'> & {
    id: string;
    author: UserSendType;
    text: string;
    createdAt: string;
    updatedAt: string;
};