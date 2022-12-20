import { uppercaseFirstChar } from "./UppercaseFirstChar";

export const changeNameTags = (tags: string[]): string[] => tags.map(tag => uppercaseFirstChar(tag.trim()))
