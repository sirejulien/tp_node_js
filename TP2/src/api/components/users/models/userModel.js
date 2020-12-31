const mongoose=require('mongoose');

const Schema=mongoose.Schema

const UserSchema = new Schema ({
    firstName: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
})