import { Response } from "express";
import { ExtendedRequest } from "../types/extended-request";
import { findUserBySlug } from "../services/user";

export const getUser = async (req: ExtendedRequest, res: Response) => {

    const { slug } = req.params

    const user = await findUserBySlug(slug)
    if (!user) return res.json({ error: 'Usuário inexistente' })

}
