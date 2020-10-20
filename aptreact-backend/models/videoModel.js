import mongoose from "mongoose";

const aptReactSchema = mongoose.Schema({
  url: String,
  screenName: String,
  description: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zipcode: Number,
  bedrooms: Number,
  bathrooms: Number,
  sqrfeet: Number,
  view: Boolean,
  nearpark: Boolean,
  neartransportation: Boolean,
  neargrocery: Boolean,
  likes: String,
  shares: String,
  date: {
    type: Date,
    default: Date.now
  }
});

// Collection inside the database
export default mongoose.model("aptReactVideos", aptReactSchema);