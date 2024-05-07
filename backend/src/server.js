import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { APIs } from '~/routes'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware'
dotenv.config()
const app = express()
app.use(express.json())
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((error) => {
    console.log(error);
  })

app.use('/api', APIs)
app.use(errorHandlingMiddleware)
const hostname = 'localhost'
const port = 3000

app.listen(port, hostname, () => {
  console.log(`Hello Trung Quan , Server running at http://${hostname}:${port}`)
})


