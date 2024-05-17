import mongoose from "mongoose";

const CountrySchema = mongoose.Schema({
    name: {
      type: String,
      require: true
    },
    flag: {
      type: String
    },
    points:{
      type: Number
    },
    PlayedMatches:{
      type: Number
    },
    wonMatches: {
      type: Number
    },
    tiedMatches : {
      type: Number
    },
    lostMatches : {
      type: Number
    },
    goals: {
      type: Number
    },
    goalsAgainst : {
      type: Number
    },
    goalsDifference : {
      type: Number
    },
});

export const CountryModel = mongoose.model("Country", CountrySchema);