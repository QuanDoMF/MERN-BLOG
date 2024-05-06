import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import useRouter from '~/routes/userRoute'
dotenv.config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((error) => {
    console.log(error);
  })
const app = express()

const hostname = 'localhost'
const port = 3000

app.listen(port, hostname, () => {
  console.log(`Hello Trung Quan , Server running at http://${hostname}:${port}`)
})

app.use('/api/user', useRouter)

