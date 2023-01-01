export type InputType = {
    numberMark: number;
    ratingNow: number;
    numberStar: number;
}

export const countAverageRating = ({
                                       ratingNow,
                                       numberMark,
                                       numberStar
                                   }: InputType): number => +((ratingNow * numberMark + numberStar) / (numberMark + 1)).toFixed(1)
