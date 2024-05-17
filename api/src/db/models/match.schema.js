import mongoose from "mongoose";

const MatchSchema = mongoose.Schema({
    group: {
      type: String,
    },
    date: {
      type: Date
    },
    numeroDay: {
      type: Number
    },
    localCountry: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
    },
    visitorCountry: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
    },
    result:{
      type: [Number]
    }
});

export const MatchModel = mongoose.model("Match", MatchSchema);