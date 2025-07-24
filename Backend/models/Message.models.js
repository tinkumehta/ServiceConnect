import mongoose from 'mongoose'

 const messageSchema = new mongoose.Schema(
  {
    chatId: { 
        type: String, 
        required: true
     }, // same for both users in chat
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: {
         type: String,
          required: true
     },
  },
  { timestamps: true }
);

export const Message =  mongoose.model('Message', messageSchema)