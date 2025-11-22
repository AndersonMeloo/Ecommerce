import { Response } from "express";
import { ExtendedRequest } from "../types/extended-request";
import { findUserById } from "../services/user";

export const getUser = async (req: ExtendedRequest, res: Response) => {

    const { id } = req.params

    const user = await findUserById(id)
    if (!user) return res.json({ error: 'Usuário inexistente' })

}
