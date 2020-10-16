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
// Tylers route starts here!!!!!!!!!!!!!!!!!!!!!!!!!!! 
app.get("/v5/posts/:state/:city/", (req, res) => {

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

app.get("/v2/posts/:category/:search/", (req, res) => {
    // this is to get everything from the database.
    console.log('req.body in category rouge!!!', req.params)

    Videos.find({
        [req.params.category]: req.params.search
    }, (err, data) => {

        console.log('data and err!!', data, err)

        res.json(data)

    });
});

export default videoRouter;