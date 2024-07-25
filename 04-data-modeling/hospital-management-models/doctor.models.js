import mongoose, { Schema } from "mongoose";

const doctorSchema = new mongoose.Schema({
doctorname:{
  type:String,
  required:true,
},
salary:{
type:String,
required:true
},
qualifications:{
  type:String,
required:true
},
experinenceInYrs:{
  type:Number,
  default:0,
},
worksInHospitals:[
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  },
]
},{timestamps:true})

export const Doctor = mongoose.model("Doctor" , doctorSchema)