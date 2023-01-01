import { model, Schema } from 'mongoose';

import { CommentServerType } from "types/CommentServerType";

export const CommentSchema = new Schema<CommentServerType>({
    author: { type: Schema.Types.ObjectId, ref: "User" },
    text: { type: String, },
    __v: { type: Number, select: false }
}, {
    timestamps: true
});

export const Comment = model<CommentServerType>('Comment', CommentSchema);
