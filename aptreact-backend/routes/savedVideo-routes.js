import savedVideo from "../models/savedVideoModel.js";
import express from "express"
import bodyParser from "body-parser";
import data from "../seed/data.js";

const savedVideoRouter = express.Router()

savedVideoRouter.use(bodyParser.json());

savedVideoRouter.post(("/v1/vid/"), (req, res, next) => {
    console.log('time to save~!!!', req.body)
    const savedVideos = req.body;
    
    console.log(savedVideos.url, "url")
    savedVideo.create( { url: savedVideos.url},
        
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
    (req, res, next);
    // save to DB!!!!! look  up how to push something to array on LocalUser $push
  });
  savedVideoRouter.get("/v1/vid/", (req, res) => {

    // this is to get everything from the database.

    savedVideo.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});


  export default savedVideoRouter;