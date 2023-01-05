import { uppercaseChar } from "./uppercaseChar";

export const changeNameTags = (tags: string[]): string[] => tags.map(tag => uppercaseChar(tag.trim()))
