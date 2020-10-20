// /////////////////////Dependency Imports ////////////////////////
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import express from "express";
import mongoose from "mongoose";

//auth dependencies
import keys from "./config/keys.js";
import passport from "passport";
import cors from "cors";
import localPassportSetup from "./passport/localUserPassportSetup.js";
import session from "express-session";
import authRoutes from "./routes/auth-routes.js";
import savedVideosR from "./routes/savedVideo-routes.js"


import cookieParser from "cookie-parser";
const MongoStore = require("connect-mongo")(session);

//middleware to store session data on the client
import cookieSession from "cookie-session";

// Video Upload dependencies
import Multer from "multer";
const { format } = require("util");
const bodyParser = require("body-parser");
const { Storage } = require("@google-cloud/storage");

//database dependencies
import Data from "./seed/data.js";
import Videos from "./models/videoModel.js";

import data from "./seed/data.js";
import { createBrotliDecompress } from "zlib";

import videoRoutes from "./routes/video-routes.js"

// app config variables
const app = express();
const port = process.env.PORT || 9000;

//////////////// End Variables //////////////////////////////////

// /////////////////  MIDDLEWARE //////////////////////////////////
app.use(express.json());
// parse cookies
app.use(cookieParser());
// initialize passport
app.use(passport.initialize());
// deserialize cookie from the browser
app.use(passport.session());

// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes)

////////////// Config //////////////////////////////////////////
//DB config
mongoose.connect(keys.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// user session config
app.use(
  cookieSession({
    name: "session",
    keys: [keys.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 1000, // session will expire after 24 hours
    resave: false,
    saveUninitialized: true,
    // to store local user signup data
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

//multer config setup
app.set("view engine", "pug");
app.use(bodyParser.json());

const multer = Multer({
  storage: Multer.memoryStorage(),
  // limits: {
  //   fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
  // },
});

/////////////////// NODE CONFIG ////////////////////////////////
//this code advises that when we get a request we'll send the headers below.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

////////////////// ROUTES ////////////////////////////////
// Route to test form submissions
app.get("/", (req, res) => {
  res.render("form.pug");
});

app.use("/api/videoRoute", videoRoutes);

// ********** AUTH ROUTES **********************************
// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);

// set up auth routes
// local
app.use("/api/auth", authRoutes);
app.use("/api/addSaved", savedVideosR);


// ********* end of Auth Routes *****************

// listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));
