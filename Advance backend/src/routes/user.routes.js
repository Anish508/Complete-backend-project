import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser , updateAccountDetails , updateUserAvatar , updateUserCoverImage , changeCurrentPassword , getCurrentUser  } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.midleware.js";

const userRouter = Router()

userRouter.route("/register").post(
  upload.fields([
    {
      name:"avatar",
      maxCount : 1,
    },
    {
      name:"coverImage",
      maxCount:1,
    }
  ]),
  registerUser
)

userRouter.route("/login").post(loginUser)

//secured routes
userRouter.route("/logout").post(
  verifyJWT ,
  logoutUser)

userRouter.route("/refresh-token").post(refreshAccessToken)  
userRouter.route("/update-account-details").post(updateAccountDetails)
userRouter.route("/update-avatar").post(updateUserAvatar)
userRouter.route("/update-cover-image").post(updateUserCoverImage)
userRouter.route("/change-current-password").post(changeCurrentPassword)
userRouter.route("/get-users").post(getCurrentUser)


export default userRouter;