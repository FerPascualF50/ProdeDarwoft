import mongoose from "mongoose";

const BetSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  matches: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Match'
  }]
})

export const BetModel = mongoose.model('Bet', BetSchema)