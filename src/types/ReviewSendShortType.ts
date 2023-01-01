import { ReviewServerType, UserSendType } from "types";

export type ReviewSendShortType = Omit<ReviewServerType, '_id' | 'author' | 'comments' | 'reviewText'> & {
    id: string;
    author: UserSendType
}
