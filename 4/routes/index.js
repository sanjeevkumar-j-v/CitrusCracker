var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", {
    title: "First Level",
    content: "https://expressjs.com/en/starter/generator.html",
  });
});

module.exports = router;
