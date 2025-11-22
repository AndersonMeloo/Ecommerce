import { NextFunction, Response } from "express"
import jwt from "jsonwebtoken"
import { ExtendedRequest } from "../types/extended-request"
import { findUserById } from "../services/user"

export const verifyJWT = (req: ExtendedRequest, res: Response, next: NextFunction) => {

    const authHeader = req.headers['authorization']

    if (!authHeader) return res.status(401).json({ error: 'Acesso negado' })

    const token = authHeader.split(' ')[1];

    jwt.verify(

        token,
        process.env.JWT_SECRET as string,
        async (error, decoded: any) => {

            if (error) return res.status(401).json({ error: 'Acesso Negado' })

            const user = await findUserById(decoded.id)

            if (!user)
                return res.status(401).json({ error: 'Acesso Negado' })

            req.userId = user.id
            next()
        }
    )
}