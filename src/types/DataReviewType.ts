import { Nullable } from "./Nullable";

export type DataReviewType = {
    idUser: string;
    id: string;
    reviewText: string;
    titleMain: string;
    titleAbout: string;
    category: string;
    tags: string;
    authorAssessment: number;
    image?: Nullable<File | string>;
};
