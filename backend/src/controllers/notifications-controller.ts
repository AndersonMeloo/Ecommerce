import { Request, Response } from "express"

const notifications = [
    { id: 1, message: 'Pagamentos Pendentes' }
]

export const getNotifications = (req: Request, res: Response) => {

    res.json(notifications)
}