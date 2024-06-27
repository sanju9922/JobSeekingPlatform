import mongoose from "mongoose";
import validator from "validator";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"Please provide your name"],
        minLength : [3,"Name must contain atleast 3 characters"],
        maxLength : [30,"Name must cant exceed 30 characters"],
    },
    email :{
        type: String,
        required: [true, "Please provide your email"],
        validate : [validator.isEmail, "Please provide a valid Email"],

    },
    phone : {
        type : Number,
        required : [true,"Please provide your phone number"],
    },
    password :{
        type : String,
        required : [true,"Please provide your passwords"],
        minLength :[8,"Passsword must contain 8 characters"],
        maxLength : [30,"password must cant exceed 30 characters"],
        select:  false
    },
    role : {
        type : String,
        required : [true, "Please provide your role"],
        enum : ["Job Seeker","Employer"],
    },
    createdAt : {
        type :Date,
        default : Date.now,

    }

})

//HASING THE PASSWORD

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
})

//COMPARING PASSWORD

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

//JSON WEB TOKEN GENERARION FOR AUTHORIZATION PROCESS
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id: this._id},process.env.JWT_SECRET_KEY,{
        expiresIn : process.env.JWT_EXPIRE,
    })
} 

export const User = mongoose.model("User",userSchema)