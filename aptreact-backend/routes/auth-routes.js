import express from "express";
const router = express.Router();
import passport from "passport";
import isAuthenticated from "../config/middleware/isAuthenticated.js";
import LocalUser from "../models/localUserModel.js";
// const CLIENT_HOME_PAGE_URL = "http://localhost:3000/Newsfeed";

// ////// TWITTER ROUTES //////////////////////////////////
// when login is successful, retrieve user info
// when login is successful, retrieve user info
// router.get("/login/success", (req, res) => {
//   if (req.user) {
//     res.json({
//       success: true,
//       message: "user has successfully authenticated",
//       user: req.user,
//       cookies: req.cookies
//     });
//   }
// });

// // when login failed, send failed msg
// router.get("/Login/failed", (req, res) => {
//   res.status(401).json({
//     success: false,
//     message: "user failed to authenticate."
//   });
// });

// // When logout, redirect to client
// router.get("/Logout", (req, res) => {
//   req.logout();
//   res.redirect(CLIENT_HOME_PAGE_URL);
// });

// // auth with twitter
// router.get("/twitter", passport.authenticate("twitter"));

// // redirect to home page after successfully login via twitter
// // "/auth/twitter/redirect" is working and server is redirecting user to react app homepage

// router.get(
//   "/twitter/redirect",
//   passport.authenticate("twitter", {
//     successRedirect: CLIENT_HOME_PAGE_URL,
//     failureRedirect: "/auth/login/failed"
//   })
// );

// ++++++++++++++ LOCAL AUTH ROUTES +++++++++++++++++++++++++++

// this route will handle both a user signing up or logging in
router.post("/register_login", isAuthenticated, (req, res, next) => {
  console.log("auth post route hit before passport");
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return res.status(400).json({ errors: err });
    }
    if (!user) {
      return res.status(400).json({ errors: "No user found" });
    }
    req.logIn(user, function (err) {
      console.log("user logging")
      if (err) {
        res.send(err)
      }
      // currently user_name is undefined
      // logged in ${user.user_name} ,
      else {
        res.redirect("/Newsfeed")
      }
    });
  })(req, res, next);
});

// this is not showing the login success message 
router.get("/register_login", isAuthenticated, (req, res, next) => {
  console.log("auth get route hit before passport");
  passport.authenticate("local", function (err, user, info) {
    req.logIn(user, function (err) {
      if (err) {
        return res.status(400).json({ errors: err });
      }
      // currently user_name is undefined
      // logged in ${user.user_name} ,
      return res.status(200).json({ success: `this user is logged in: ${user.email}` });
    });
  })(req, res, next);
});



router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  LocalUser.findOne({ where: { id: id } })
      .then(data => res.json(data))
})

// middleware isn't working
// router.get("/api/users", isAuthenticated, (req, res) => {
//   LocalUser.findAll({}).then(data => {
//     res.json(data);
//   });
// });

// get all users in DB
router.get("/users", (req, res) => {
  LocalUser.find({}).then(data => {
    res.json(data);
  });
});


// Route for logging user out
router.get(("/logout" || "/failure"), (req, res) => {
  req.logout();
  res.redirect("/");
});

export default router;
