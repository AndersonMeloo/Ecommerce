import { Router } from 'express'
import * as authController from '../controllers/auth-controller'
import * as userController from '../controllers/user-controller'
import * as notificationsController from '../controllers/notifications-controller';
import { verifyJWT } from '../middlewares/auth.middleware'

export const mainRouter = Router()

mainRouter.post('/auth/signup', authController.signup)
mainRouter.post('/auth/signin', authController.signin)
mainRouter.get('/user/:id', verifyJWT, userController.getUser)
mainRouter.get('/user/:id/notifications', verifyJWT, notificationsController.getNotifications);