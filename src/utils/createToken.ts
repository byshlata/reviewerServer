import { Secret } from "../enums/secret";

const jwt = require('jsonwebtoken')

export const createToken = (id: string): string => jwt.sign({ id, }, Secret.Secret, { expiresIn: '30d' })

