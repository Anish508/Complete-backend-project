import mongoose, { mongo, Mongoose } from "mongoose";

const todoScehma = new mongoose.Schema({
content:{
  type:String,
  required:true,
},
complete:{
  type:Boolean,
  required:true,
  default:false,
},
createdBy:{
  type:mongoose.Schema.Types.ObjectId,
  ref:User,
},
subTodos:{
type:mongoose.Schema.Types.ObjectId,
}
},{timestamps:true})

export const Todo = Mongoose.model("Todo" , todoScehma)