import express from 'express'
import { userController } from '~/controllers/userController'

const Router = express.Router()

Router.route('/test')
    .get(userController.test)


export const userRoute = Router