import savedVideo from "../models/savedVideoModel";

savedVideo.post(("/addSaved"), (req, res, next) => {
    console.log('time to save~!!!', req.body)
    const savedVideos = req.body;
    LocalUser.update(
    { $push: { saved_Videos: savedVideos } }
    ).then(data => res.json(data))
    (req, res, next);
    // save to DB!!!!! look  up how to push something to array on LocalUser $push
  });

  export default savedVideo;