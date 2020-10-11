// using passport middleware to authenticate users via Twitter OAuth
import passport from "passport";
import TwitterStrategy from "passport-twitter";
import KEYS from "./keys.js";
import User from "../models/twitterUserModel.js";

// Serialization is when the user gets encrypted from the database 
// and sends it back to the browser as a cookie. 
// Deserialization is when the user cookie gets decrypted from the browser to the database.
// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
});

passport.use(
  new TwitterStrategy(
    {
      // options for the twitter start
      consumerKey: KEYS.TWITTER_CONSUMER_KEY,
      consumerSecret: KEYS.TWITTER_CONSUMER_SECRET,
      callbackURL: "/auth/twitter/redirect"
    },
    async (token, tokenSecret, profile, done) => {
      // find current user in UserModel
      const currentUser = await User.findOne({
        twitterId: profile._json.id_str
      });
      // create new user if the database doesn't have this user
      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.name,
          screenName: profile._json.screen_name,
          twitterId: profile._json.id_str,
          profileImageUrl: profile._json.profile_image_url
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);

export default passport;