import {User} from "../models/User.models.js"
import jwt from 'jsonwebtoken'
import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiResponse} from '../utils/apiResponse.js'
import {ApiError} from '../utils/apiError.js'
import  { uploadToCloudinary } from "../utils/cloudinary.js"

const register = asyncHandler (async (req, res) => {
    const {name, email, username, password, role} = req.body;
    // check all field give fronted
    // user already exits
    // hash password
    
    if ([name, email,username, password, role].some((index) => index?.trim() === "")) {
        throw new ApiError(400, "All field's is required")
    }

    const existingUser = await User.findOne({
        $or : [{email}, {username}]
    });

    if (existingUser) {
        throw new ApiError(400, "User is already exits")
    }

    let avatarUrl = '';
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, 'avatars');
      avatarUrl = result.secure_url;
    }

    const user = await User.create({
        name,
        
        email, 
        username,
        password,
        role,
        avatar : avatarUrl,
    })
    const token = jwt.sign(
        {id : user._id},
        process.env.JWT_SECRET
    );

    const createUser = await User.findById(user?._id).select("-password")
    if (!createUser) {
        throw new ApiError(500, "created user is falied")
    }

    return res
    .status(201)
    .json(
        new ApiResponse (201,{token ,createUser}, "User register is successfully")
    )

})

 const login = asyncHandler(async (req, res) => {
    const {email, password, username} = req.body

    if (! (email || username)) {
        throw new ApiError(400, "email and password is required")
    }

    const user = await User.findOne({
        $or : [{username}, {email}]
    });
    if (!user) {
        throw new ApiError(400, "User not found")
    }

    const isMatch = await user.isPasswordCorrect(password)

    if (!isMatch) {
        throw new ApiError(400, "Password is not correcty")
    }

    const createdUser = await User.findById(user?._id).select("-password")
    if (!createdUser) {
        throw new ApiError(500, "user login is falied")
    }
    const token = jwt.sign(
        {
        _id : user._id,
    },
    process.env.JWT_SECRET,
    {
        expiresIn : '1d'
    }
    )

    return res
    .status(201)
    .json(
        new ApiResponse (201, {token, createdUser}, "user login is successfully")
    )
 })

 const changePassword = asyncHandler (async (req, res) => {
    const {oldPassword, newPassword} = req.body;

    if (!newPassword) {
        throw new ApiError(400, "All filed is required")
    }

    const user = await User.findById(req.user?._id);

    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid Password")
    }
    user.password = newPassword
    await user.save({validateBeforeSave : false})

    return res
    .status(201)
    .json(
        new ApiResponse (201, {}, "Password change succefully")
    )
 })
 
const getCurrentUser = asyncHandler(async (req, res) => {
    const userId = req.user._id;

    const user = await User.findById(userId).select("-password")

    if (!user) {
        throw new ApiError(404, "User not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, user, "current user fetched successfully"))
})

 export {
    register,
    login,
    changePassword,
    getCurrentUser,
 }
