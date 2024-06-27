import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true , "Please provide Job title"],
        minLength :[3,"Job Title must contain atleast 3 characters"],
        maxLength:[50,"Job title cannot exceed 50 characters"]
    },
    description :{
        type : String,
        required:[true,"Please provide Job Description"],
        minLength :[50,"Job Description must contain atleast 50 characters"],
        maxLength:[350,"Job title cannot exceed 350 characters"],
    },
    category :{
        type : String,
        required:[true,"Job Category is required"]
    },
    country :{
        type : String,
        required:[true,"Job Country is required"]
    },
    city :{
        type : String,
        required:[true,"Job City is required"]
    },
    location :{
        type : String,
        required:[true,"Please provide exact location"],
        minLength :[50,"Job location must contain atleast 50 characters"],

    },
    fixedSalary:{
        type :Number,
        minLength : [4,"Fixed Salary must contain atleast 4 digits"],
        maxLength:[9,"Fixed salary cant be more than 9 digits"]
    },
    salaryFrom:{
        type :Number,
        minLength : [4," SalaryFrom must contain atleast 4 digits"],
        maxLength:[9,"SalaryFrom cant be more than 9 digits"]
    },
    salaryTo:{
        type :Number,
        minLength : [4," SalaryTo must contain atleast 4 digits"],
        maxLength:[9,"SalaryTo cant be more than 9 digits"]
    },

    expired :{
        type: Boolean,
        default: false,
    },
    jobPostedOn:{
        type: Date,
        default : Date.now
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref : "User",
        required: true,

    }

});

export const Job = mongoose.model("Job",jobSchema)