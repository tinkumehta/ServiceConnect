
import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiResponse} from '../utils/apiResponse.js'
import {ApiError} from '../utils/apiError.js'
import {Reviews} from "../models/Review.models.js"
import { isValidObjectId } from 'mongoose'
import { Provider } from '../models/Provider.models.js'


const createReview = asyncHandler (async (req, res) => {
    const {providerId, rating, comment} = req.body;
    const userId = req.user._id;

    const provider = await Provider.findById(providerId);
     
    if (!provider) {
        throw new ApiError(404, "Provider id is not found")
    }

   // check if user already reviewed this product
   const alreadyReviewed = await Reviews.findOne({
      user : userId,
      provider : providerId
   });

   if (alreadyReviewed) {
     throw new ApiError(400, "Provider is already review")
   }

    if (! (rating || comment)) {
        throw new ApiError(400, "All field is required")
    }
    
    const review = await Reviews.create({
        user : userId,
        provider : providerId,
        rating : Number(rating),
        comment
    });

    if (!review) {
        throw new ApiError(500, "Failed to review")
    }
    return res
    .status(201)
    .json(
        new ApiResponse(201, review, "review is successfully")
    )
})

const getReviewsByProvider = asyncHandler(async (req, res) => {
    const {providerId} = req.params;

    if (!isValidObjectId(providerId)) {
        throw new ApiError(400, "Provider id is empty")
    }
    const reviews = await Reviews.find({
        provider : providerId
    }).populate('user', '-password -email').populate('provider').sort({createdAt: -1});

    if (!reviews) {
        throw new ApiError(500, "Failed to get reviews")
    }

    return res
    .status(201)
    .json(
        new ApiResponse(201, reviews, "get reviews is successfully")
    )
})

export {createReview, getReviewsByProvider}
