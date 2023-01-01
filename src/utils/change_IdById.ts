export const change_IdById = <T>(user: T): Omit<T, '_id'> & { id: string } => {
    const { _id, password, ...otherInformation } = JSON.parse(JSON.stringify(user))
    return { id: _id, ...otherInformation }
}
