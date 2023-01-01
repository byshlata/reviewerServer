import { ErrorMessage, Secret, Status } from "../enums";
import { getUserById } from "../server/repository";
import { decipherToken } from "../utils";

export const checkAuth = async (req, res, next) => {
    const token = req.cookies.access_token
    if (token) {
        try {
            const decodedToken = decipherToken(token, Secret.Secret)
            const user = await getUserById(decodedToken)
            if (user && user.status === Status.Block) {

                return res.status(403).send({
                    message: ErrorMessage.Block,
                    auth: false
                })
            }
            if (!user) {

                return res.status(404).send({
                    message: ErrorMessage.UserNotFound,
                    auth: false
                })
            }
            req.body.id = decodedToken;
            next();
        } catch (error) {

            return res.status(401).send({ message: ErrorMessage.Authorized })
        }
    } else {
        return res.status(401).send({ message: ErrorMessage.Authorized })
    }
}
