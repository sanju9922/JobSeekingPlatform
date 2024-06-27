import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName : "jobSeekingWebsite"
    }
    ).then(
        ()=>{
            console.log("Database connected ! ");
        }
    ).catch((err)=>{
        console.log("some error while connecting to the database")
    })
}

