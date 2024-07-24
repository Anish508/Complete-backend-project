import { timeStamp } from "console";
import mongoose from "mongoose";

const userShema = new mongoose.Schema({
  username:{
    type : String,
    required:true,
    unique:true,
    lowercase:true,
  },
  email:{
    type : String,
    required:true,
    unique:true,
    lowercase:true
  
  },
  password:{
    type : String,
    required:[true , "Password is required"],
    unique:true,
    lowercase:true
  
  },
},{timeStamps:true})

export const User = mongoose.model("User",userSchema)