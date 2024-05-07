import express from 'express'
import { userRoute } from './userRoute'
import { authRoute } from './authRoute'

const Router = express.Router()

Router.use('/user', userRoute)
Router.use('/auth', authRoute)

export const APIs = Router
