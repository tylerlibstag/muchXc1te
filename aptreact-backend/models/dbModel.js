import mongoose from "mongoose";

const aptReactSchema = mongoose.Schema({
  url: String,
  channel: String,
  apt: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
  date:{
    type: Date,
    default: Date.now
}
});

// Collection inside the database
export default mongoose.model("aptReactVideos", aptReactSchema);
