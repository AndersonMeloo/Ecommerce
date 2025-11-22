import jwt from "jsonwebtoken"
import { appConfig } from "../config/app"

export const createJWT = (id: string) => {

    return jwt.sign(

        { id },
        appConfig.jwtSecret as string
    )
}