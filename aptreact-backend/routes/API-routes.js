const dbModel = require("../models/dbModel");

app.use("/api", apiRoutes);

const router = require("express").Router();

router.get("/api/dbModel", (req, res) => {
  userCri.find({})
    .then(dbModel => {
      
      res.json(dbModel);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

 module.exports = router;