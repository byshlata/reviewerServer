import { UserServerType } from "types";

export type CommentServerType = {
    _id: string;
    author: UserServerType;
    text: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};