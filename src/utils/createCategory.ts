export const createCategory = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1).split('').map(char => char.toLowerCase()).join('')
