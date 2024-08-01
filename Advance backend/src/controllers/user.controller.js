import { asyncHandler } from "../utils/asyncHandler.js";
import {apiError} from "../utils/apiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/apiResponse.js";
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "hello world",
  });

  const {fullname , email , username , password} = req.body
  console.log("email:",email);
  console.log("password:",password);

  /* if (fullname === "") {
    throw new apiError(400 , "Full name is required")
  } */
 if ([fullname ,email , username , password].some((field)=>field?.trim()==="")) {
  throw new apiError(400 , "All fields are required")
 }

 const existedUser = User.findOne({
  $or : [{ username } , { email }]
 })
 if (existedUser) {
  throw new apiError(409 , "User with email or username already exist")
 }

  const avatarLocalPath = req.files?.avatar[0]?.path
  const coverLocalPath = req.files?.coverImage[0]?.path

  if (!coverLocalPath) {
    throw new apiError(400 , "Avatar file is required")
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath)
  const coverImage = await uploadOnCloudinary(coverLocalPath)
  
  if(!avatar){
    throw new apiError(404 , "Avtar file is required")
  }

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage:coverImage ?.url || "",
    email,
    password,
    username,
  })
  
  const createdUser = await User.findById(user._id).select(
    "-password -refreshTokens"
  )
  if (!createdUser) {
    throw new apiError(500 , "Something went wrong while registering the user")
  }

  return res.status(201).json((
    new ApiResponse(200 , createdUser , "User registered successfully")
  ))
});

export { registerUser };
