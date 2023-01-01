import { StatusType } from "types/StatusType";
import { RightsType } from "types/RightsType";

export type AdminTableType = {
    idUser: string;
    login: string;
    rating: number;
    status: StatusType,
    rights: RightsType,
};
