import { model, Schema } from 'mongoose';

import { CommentType } from "../types/CommentType";

export const CommentSchema = new Schema<CommentType>({
    idAuthor: { type: String, required: true },
    imageAuthor: { type: String, required: true, default: null },
    loginAuthor: { type: String, required: true }
}, {
    timestamps: true
});


export const Comment = model<CommentType>('Comment', CommentSchema);
