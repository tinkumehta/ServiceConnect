import {User} from "../models/User.models.js"
import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiResponse} from '../utils/apiResponse.js'
import {ApiError} from '../utils/apiError.js'
import { Message } from "../models/Message.models.js"

const sendMessage = asyncHandler(async (req, res) => {
    const {receiverId, text} = req.body;

    if (!receiverId || !text) {
        throw new ApiError(400," Receiver and text are required")
    }

    const newMessage = await Message.create({
        sender : req.user._id,
        receiver : receiverId,
        text
    });
    
    if (!newMessage) {
        throw new ApiError(500, "Failed to send message")
    }

    return res
    .status(201)
    .json(
        new ApiResponse(201, newMessage, "message send successfully ")
    )
})

const getMessage = asyncHandler (async (req, res) => {
    const {chatId} = req.params;

    if (!chatId) {
        throw new ApiError(400, "provider id is required")
    }

    const message = await Message.find({chatId}).sort('createdAt');

    if (!message) {
        throw new ApiError(500, "Get message is failed")
    }
    return res
    .status(201)
    .json( 
        new ApiResponse(201, message, "get message is successfully")
    )
})

export {
    sendMessage,
    getMessage
}