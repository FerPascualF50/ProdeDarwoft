import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  providerId: {
    type: String,
    unique: true,
  },
  provider: {
    type: String
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  displayName:{
    type: String
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  imageProfile: {
    type: String,
    required: false,
  },
  pointsByMatch: {
    type: Number,
  },
  pointsByResult: {
    type: Number,
  },
},
  { timestamps: true }
);

export const UserModel = mongoose.model("User", UserSchema);