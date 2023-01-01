import {
    Empty,
    ErrorResponseType,
    IdType,
    SearchQueryParamsType,
    SearchResponseType
} from "../../types";
import express, { Request } from "express";
import { ErrorMessage, Path, QueryAPI } from '../../enums'
import { searchByReview } from "../../server/repository/repositoryReview";

const router = express.Router();

router.post<Empty, SearchResponseType | ErrorResponseType, IdType, Empty>(`${ Path.Root }`, async (req: Request<Empty, Empty, IdType, SearchQueryParamsType>, res) => {
        try {
            const { query } = req
            const searchResult = await searchByReview(query[QueryAPI.Search])

            return res.send({ searchResult });
        } catch
            (error) {
            console.log(error.message)
            return res.status(401).send({ message: ErrorMessage.ServerError })
        }
    }
);

module.exports = router
