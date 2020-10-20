// Model to save a user's liked videos set up
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const savedVideoSchema = new Schema({
    userID: ObjectId,
    url: String,
    screenName: String
});

const savedVideo = mongoose.model("savedVideo", savedVideoSchema);

export default savedVideo;