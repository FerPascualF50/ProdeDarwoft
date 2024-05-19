import mongoose from "mongoose";

const MatchSchema = mongoose.Schema({
    group: {
      type: String,
    },
    date: {
      type: Date
    },
    numberDay: {
      type: Number
    },
    localCountry: {
      id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Country",
      }, 
      goals:{
        goalsGame:{
          type: Number,
          default: 0
        }, 
        goalsPenalty:{
          type: Number,
          default: 0
        },
      },
    },
    visitorCountry: {
      id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Country",
      }, 
      goals:{
        goalsGame:{
          type: Number,
          default: 0
        }, 
        goalsPenalty:{
          type: Number,
          default: 0
        },
      },
    },
});

export const MatchModel = mongoose.model("Match", MatchSchema);