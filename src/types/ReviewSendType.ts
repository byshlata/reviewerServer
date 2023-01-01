import { CommentSendType, UserSendType, ReviewSendShortType } from "types";

export type ReviewSendType = ReviewSendShortType & {
    id: string;
    author: UserSendType;
    comments: CommentSendType[]
}
