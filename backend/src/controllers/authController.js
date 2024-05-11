import User from "~/models/userModel"
import bcryptjs from 'bcryptjs'
import { errorHandle } from "~/utils/errorHandle"
import jwt from 'jsonwebtoken'
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
        res.json({
            success: true,
            message: 'Signup Successfully'
        })
    }
    catch (error) {
        next(error)
    }
}

const signin = async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password || email === ' ' || password === '') {
        next(errorHandle(400, 'All fields are required'))
    }
    try {
        const valueUser = await User.findOne({ email })
        if (!valueUser) {
            return next(errorHandle(404, 'User not found'))
        }
        const validPassword = bcryptjs.compareSync(password, valueUser.password)
        if (!validPassword) {
            return next(errorHandle(400, 'Invalid email or password'))
        }

        const token = jwt.sign({ id: valueUser._id }, process.env.JWT_SECRET)   // expired: thời gian hết hạn token

        const { password: pass, ...rest } = valueUser._doc

        res.status(200).cookie('access_token', token, { httpOnly: true }).json(
            {
                success: true,
                message: 'Signin Successfully',
                data: rest  // là data đã được lọc ở trên loại bỏ password
            })
    }
    catch (error) {
        next(error)
    }
}
export const authController = {
    signup,
    signin
}