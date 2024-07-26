
import connectDB from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";

//require('dotenv').config({path:'./env'})
/* console.log(process.env) // remove this after you've confirmed it is working
 */

dotenv.config({
  path:'./env'
})
connectDB()
.then(()=>{
  app.on("error", (error)=>{
    console.log("ERRR:", error);
    throw error
  })
  app.listen(process.env.PORT || 3000 , ()=>{
    console.log(`Server is running at port : ${process.env.PORT}`);
  })
})

.catch((err)=>{
  console.log("Mongo db connection failed !!!" ,err);
})





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