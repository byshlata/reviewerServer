export type InputType = {
    idUsers: string[];
    idUser: string;
}

export const isStatusRating = ({
                                   idUsers, idUser
                               }: InputType): boolean => !!idUsers.find(id => String(id) === String(idUser))
