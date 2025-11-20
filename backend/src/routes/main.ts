import { Router } from 'express'

import * as authController from '../controllers/auth'
import * as userController from '../controllers/user'
import { verifyJWT } from '../utils/jwt'

export const mainRouter = Router()

mainRouter.post('/auth/signup', authController.signup)
mainRouter.post('/auth/signin', authController.signin)
mainRouter.get('/user/:slug', verifyJWT, userController.getUser)


