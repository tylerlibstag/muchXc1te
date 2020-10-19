import express from "express";
// this is so we can access the Router() from the express library
const router = express.Router();
import passport from "passport";
const CLIENT_HOME_PAGE_URL = "http://localhost:3000/Newsfeed";
import db from "../models/localUserModel.js";

// ////// TWITTER ROUTES //////////////////////////////////
// when login is successful, retrieve user info
// when login is successful, retrieve user info
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  }
});

// when login failed, send failed msg
router.get("/Login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

// When logout, redirect to client
router.get("/Logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_HOME_PAGE_URL);
});

// auth with twitter
router.get("/twitter", passport.authenticate("twitter"));

// redirect to home page after successfully login via twitter
// "/auth/twitter/redirect" is working and server is redirecting user to react app homepage

router.get(
  "/twitter/redirect",
  passport.authenticate("twitter", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: "/auth/login/failed"
  })
);

// ++++++++++++++ LOCAL AUTH ROUTES ++++++++++++++++++++++++++++
// this route will handle both a user signing up or logging in
router.post("/register_login", (req, res, next) => {
  passport.authenticate("local", function(err, user, info) {
      if (err) {
          return res.status(400).json({ errors: err });
      }
      if (!user) {
          return res.status(400).json({ errors: "No user found" });
      }
      req.logIn(user, function(err) {
          if (err) {
              return res.status(400).json({ errors: err });
          }
          return res.status(200).json({ success: `logged in ${user.email}` });
      });
  })(req, res, next);
});


// Route for getting some data about our user to be used client side
router.get("/api/user_data", (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      id: req.user.id,
      email: req.user.email,
      date: req.user.date
    });
  }
});

 // Route for logging user out
 router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});
// add url string to local user database model. usersaved videos array of strings. the url needs to be added to the array
// once the string is in the user saved array create a get route that will get that data and post it to the saved page 
export default router;
