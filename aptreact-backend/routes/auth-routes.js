import express from "express";
const router = express.Router();
import passport from "passport";
import isAuthenticated from "../middleware/isAuthenticated.js";
import LocalUser from "../models/localUserModel.js";
import bodyParser from "body-parser";
router.use(bodyParser.json());


// ++++++++++++++ LOCAL AUTH ROUTES +++++++++++++++++++++++++++
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



router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  LocalUser.findOne({ where: { id: id } })
      .then(data => res.json(data))
})

// get all users in DB
router.get("/users", (req, res) => {
  LocalUser.find({}).then(data => {
    res.json(data);
  });
});


// Route for logging user out
router.get(("/logout"), (req, res) => {
  req.logout();
  res.redirect("/");
});

export default router;
