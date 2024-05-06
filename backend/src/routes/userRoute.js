import express from 'express'
import { test } from '~/controllers/userController'
const router = express.Router()

router.get('/test', test)


export default router