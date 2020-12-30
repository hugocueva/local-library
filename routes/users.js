var express = require("express");
var mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://dblocallibrary:localLibrary781@cluster0.kwup8.mongodb.net/local_library?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/cool/", function (req, res, next) {
  res.send(`You're so cool `);
});

module.exports = router;
