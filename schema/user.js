import { Schema } from "mongoose";

export const UserSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    zpi:{
        type: String,
        required: true
    },
    balance:{
        default: 500,
        type: Number,
    }
});