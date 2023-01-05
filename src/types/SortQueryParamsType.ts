import { QueryAPI } from "../enums"

export type SortQueryParamsType = {
    [QueryAPI.Data]: number,
    [QueryAPI.Rating]: number,
    [QueryAPI.Count]: number,
    [QueryAPI.Sort]: number,
    [QueryAPI.Tag]: string,
}

