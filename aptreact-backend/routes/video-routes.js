import express from "express";
const videoRouter = express.Router();
/////
import Videos from "../models/videoModel.js";

import Multer from "multer";
import { format } from "util";
import pkg from '@google-cloud/storage';
const { Storage } = pkg;
import bodyParser from "body-parser";
var publicUrl = "";

videoRouter.use(bodyParser.json());
videoRouter.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"),
        res.setHeader("Access-Control-Allow-Headers", "*"),
        next();
});

//instantiate storage client
const storage = new Storage({
    keyFilename: "./aptreactstorage-52385ce6c45e.json",
});
const bucket = storage.bucket("apt-videos");

const multer = Multer({
    storage: Multer.memoryStorage(),
    // limits: {
    //   fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
    // },
});




videoRouter.get("/upload3", (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});


// **********  BEGINNING OF MULTER/GOOGLE POST ROUTE ********* //
videoRouter.post("/upload3", multer.single("file"), (req, res, next) => {

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
        // res.status(200).send(publicUrl);

        //new block
        const newVideo = new Videos({
            ...req.body,
            url: publicUrl
        })
        newVideo.save()
            .then(() => res.json({
                message: "Video uploaded successfully"
            }))
            .catch(err => res.status(400).json({
                "error": err,
                "message": "Error uploading video"
            }))

        // This is
        // Videos.findOneAndUpdate(
        //     { screenName: "susanTestWBen" },
        //     { url: publicUrl },

        //     function (err, result) {
        //         if (err) {
        //             res.send(err);
        //         } else {
        //             res.send(result);
        //         }
        //     }
        // );
    });

    blobStream.end(req.file.buffer);
});









videoRouter.post("/upload2", (req, res) => {

    const {
        url,
        screenName,
        description,
        address1,
        address2,
        city,
        state,
        zipcode,
        bedrooms,
        bathrooms,
        sqrfeet,
        view,
        nearpark,
        neartransportation,
        neargrocery,
        likes,
        shares

    } = req.body;
    const newVideo = new Videos({
        url: url,
        screenName: screenName,
        description: description,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        zipcode: zipcode,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        sqrfeet: sqrfeet,
        view: view,
        nearpark: nearpark,
        neartransportation: neartransportation,
        neargrocery: neargrocery,
        likes: likes,
        shares: shares
    })

    newVideo.save()
        .then(() => res.json({
            message: "Video uploaded successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error uploading video"
        }))



})
// Tylers route starts here!!!!!!!!!!!!!!!!!!!!!!!!!!! 
videoRouter.get("/v5/posts/:state/:city/", (req, res) => {

    Videos.find(
        { state: req.params.state },
        { city: req.params.city },


        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }

    );
    console.log('city test is working!!!', req.params);
});

//working route  

videoRouter.get("/v2/posts/:category/:search/", (req, res) => {
    // this is to get everything from the database.
    console.log('req.body in category rouge!!!', req.params)

    Videos.find({
        [req.params.category]: req.params.search
    }, (err, data) => {

        console.log('data and err!!', data, err)

        res.json(data)

    });

});


videoRouter.post("/upload4", multer.single("url"), (req, res, next) => {
    var {
        url,
        screenName,
        description,
        address1,
        address2,
        city,
        state,
        zipcode,
        bedrooms,
        bathrooms,
        sqrfeet,
        view,
        nearpark,
        neartransportation,
        neargrocery,
        likes,
        shares

    } = req.body;

    const newVideo = new Videos({
        url: url,
        screenName: screenName,
        description: description,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        zipcode: zipcode,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        sqrfeet: sqrfeet,
        view: view,
        nearpark: nearpark,
        neartransportation: neartransportation,
        neargrocery: neargrocery,
        likes: likes,
        shares: shares
    })
    newVideo.save()
        .then(() => res.json({

            message: "Video uploaded successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error uploading video"
        }));
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
        //res.status(200).send(publicUrl);
        // This is
        Videos.findOneAndUpdate(
            { screenName: screenName },
            { url: publicUrl },

            function (err, result) {

                if (err) {
                    res.send(err)
                    console.log(err);
                } else {
                    console.log(result);
                    res.send(result);
                }
            }
        );
    });
    blobStream.end(req.file.buffer);

});

export default videoRouter;