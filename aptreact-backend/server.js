import { createRequire } from "module";
const require = createRequire(import.meta.url);
import express from "express";
import mongoose from "mongoose";
import Multer from "multer";

//const config = require("./aptreactstorage-52385ce6c45e.json");
const { format } = require("util");
const bodyParser = require("body-parser");

const { Storage } = require("@google-cloud/storage");

//instanstiate storage client
const storage = new Storage({
  keyFilename: "./aptreactstorage-52385ce6c45e.json",
});

const port = process.env.PORT || 9000;

//database stuff
import Data from "./data.js";
import Videos from "./dbModel.js";

// app config
const app = express();

//multer things
app.set("view engine", "pug");
app.use(bodyParser.json());

const multer = Multer({
  storage: Multer.memoryStorage(),
  // limits: {
  //   fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
  // },
});

const bucket = storage.bucket("apt-videos");

app.get("/", (req, res) => {
  res.render("form.pug");
});

// middleware

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
    const publicUrl = format(
      `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    );
    res.status(200).send(publicUrl);
  });

  blobStream.end(req.file.buffer);
});

app.use(express.json());

//

//what this is doing is that when we get a request we'll send the headers below.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

//DB config

const connection_url =
  "mongodb+srv://admin:iOmvDDZRoLyiWtkt@cluster0.uw0yk.gcp.mongodb.net/aptreact?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// api endpoints

app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

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

app.post("/v2/posts", (req, res) => {
  // POST request is the add data to the database
  // it will let us add a video document to the videos collection
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));
