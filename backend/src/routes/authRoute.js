import express from 'express'
import { authController } from '~/controllers/authController'

const Router = express.Router()

Router.route('/signup')
    .post(authController.signup)
Router.route('/signin')
    .post(authController.signin)
export const authRoute = Router
