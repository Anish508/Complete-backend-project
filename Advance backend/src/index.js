
import connectDB from "./db/index.js";
import dotenv from "dotenv"

//require('dotenv').config({path:'./env'})
/* console.log(process.env) // remove this after you've confirmed it is working
 */

dotenv.config({
  path:'./env'
})
connectDB()




/*
import express from "express"
import connectDB from "./db";
const app = express()
 (async ()=>{
    try{
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error", (error)=>{
        console.log("ERRR:", error);
        throw error
      })

      app.listen(process.env.PORT , ()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
      })
    }
    catch(err){
      console.log("ERROR:",err);
    }
  })
  ()
 */