import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        // độc nhất, để kiểm tra không trùng username
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique,
    },
    password: {
        type: String,
        require: true
    },
}, { timestamps: true }
)
const User = mongoose.model('User', userSchema)

export default User