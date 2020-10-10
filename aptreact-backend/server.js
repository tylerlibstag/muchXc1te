// /////////////////////Dependency Imports ////////////////////////
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import express from "express";
import mongoose from "mongoose";

//auth dependencies
import keys from "./config/keys.js";
import passport from "passport";
import cors from "cors";
import twitterPassportSetup from "./config/twitterPassportSetup.js";
import localPassportSetup from "./config/localUserPassportSetup.js";
import session from "express-session";
import authRoutes from "./routes/auth-routes.js";
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
import Videos from "./models/dbModel.js";

// /////////////////Variables /////////////////////////////////////

// Variables for Database
var publicUrl = "";
const filter = { url: publicUrl };

//instantiate storage client
const storage = new Storage({
  keyFilename: "./aptreactstorage-52385ce6c45e.json",
});
const bucket = storage.bucket("apt-videos");

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

// **********  BEGINNING OF MULTER/GOOGLE POST ROUTE ********* //
app.post("/upload", multer.single("file"), (req, res, next) => {
  if (!req.file) {
    res.status(400).send("No file uploaded.");
    return;
  }

  // Create a new blob in the bucket and upload the file data.
  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream();

  blobStream.on("error", (err) => {
    next(err);
  });

  blobStream.on("finish", () => {
    // The public URL can be used to directly access the file via HTTP.
    publicUrl = format(
      `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    );
    res.status(200).send(publicUrl);

    // This is
    Videos.findOneAndUpdate(
      { channel: "sssanga" },
      { url: publicUrl },
      function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  blobStream.end(req.file.buffer);
});

/****************  BEGINNING OF DATABASE TEST POST ROUTE **********/
app.post("/v2/posts", (req, res) => {
  // POST request is the add data to the database
  // it will let us add a video document to the videos collection

  const dbVideos = req.body;

  //publicUrl.findOneAndUpdate(dbVideos);

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// DATABASE GET Routes ***********************************
// old hello world route, main page entry point. //
//app.get("/", (req, res) => res.status(200).send("hello world"));

// Route to test form submissions
app.get("/", (req, res) => {
  res.render("form.pug");
});

// local seed database route
app.get("/v1/posts", (req, res) => res.status(200).send(Data));

// mongoose test route.
app.get("/v2/posts", (req, res) => {
  // this is to get everything from the database.

  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

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
// twitter
app.use("/auth", authRoutes);
const authCheck = (req, res, next) => {
  next();
};
// local
app.use("/api/auth", authRoutes);

// user auth sign-in on home page
// if user is already logged in, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
app.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies,
  });
});

// ********* end of Auth Routes *****************

// listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));
