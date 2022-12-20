import { QueryAPI } from "../enums"

export type SortQueryParamsType = {
    [QueryAPI.Sort]: number,
    [QueryAPI.Count]: number
}

