import { AdminTableType, UserServerType } from "types";

export const createAdminTableResponse = (reviews: UserServerType[]): AdminTableType[] =>
    reviews.map(({rating, rights, login, status, _id}) =>
        ({rights, status, rating, login, idUser: _id }) )

