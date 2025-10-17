import mongoose,{Schema} from "mongoose";

 const reviewsSchema = new Schema (
    {
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        provider : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Provider"
        },
        rating : {
            type : Number,
            min : 1,
            max : 5
        },
        comment : String,
        createdAt : {
            type : Date,
            default : Date.now()
        }
    },
    {timestamps : true}
 )

 // prevent user from submitting more than one review per product
  reviewsSchema.index({user : 1, provider : 1}, {unique : true});

  export const Reviews = mongoose.model('Reviews', reviewsSchema)