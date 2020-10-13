import express from "express";
const videoRouter = express.Router();
/////
import Video from "../models/videoModel.js";

videoRouter.get("/upload", (req, res) => {
    Video.find()
        .then(videos => res.json(videos))
        .catch(err => console.log(err))
});
////
videoRouter.post("/upload", (req, res) => {
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
    const newVideo = new Video({
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
            message: "Created account successfully"

        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))

})

export default videoRouter;