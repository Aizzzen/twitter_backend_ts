import {model, Schema} from 'mongoose'

const UserSchema = new Schema({
    email: {unique: true, required: true, type: String},
    fullName: {required: true, type: String},
    userName: {required: true, type: String},
    password: {required: true, type: String},
    confirmed_hash: {required: true, type: String},
    confirmed: {type: Boolean, default: false},
    location: String,
    about: String,
    website: String,
})

export const UserModel = model('User', UserSchema)
