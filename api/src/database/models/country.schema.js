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
    playedMatches:{
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
    group:{
      type: String
    },
    orderInsideGroup:{
      type: Number
    }
});

export const CountryModel = mongoose.model("Country", CountrySchema);