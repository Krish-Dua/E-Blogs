const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    profileImage:{type:String,
        default:"default_user_img.jpg"},
    username: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: { type: String, required: true },
}, { timestamps: true })
const User = model('User', userSchema);
module.exports = User;                                                        