import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  screenName: String,
  twitterId: String,
  profileImageUrl: String,
  date:{
    type: Date,
    default: Date.now
}
});

const User = mongoose.model("user", userSchema);

export default User;