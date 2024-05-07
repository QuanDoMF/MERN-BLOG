import express from 'express'
import { authController } from '~/controllers/authController'

const Router = express.Router()

Router.route('/signup')
    .post(authController.signup)


export const authRoute = Router
