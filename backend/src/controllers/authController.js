import User from "~/models/userModel"
import bcryptjs from 'bcryptjs'
import { errorHandle } from "~/utils/errorHandle"
const signup = async (req, res, next) => {
    const { username, email, password } = req.body

    if (!username || !email || !password || username === '' || email === ' ' || password === ' ') {
        return next(errorHandle(400, 'All fields are required'))
    }

    const hashPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({
        username,
        email,
        password: hashPassword
    })
    try {
        await newUser.save()
        res.json('Signup successfull')
    }
    catch (error) {
        next(error)
    }

}
export const authController = {
    signup
}