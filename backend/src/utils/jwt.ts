import jwt from "jsonwebtoken"
import { appConfig } from "../config/app"

export const createJWT = (slug: string) => {

    return jwt.sign(

        { slug },
        appConfig.jwtSecret as string
    )
}