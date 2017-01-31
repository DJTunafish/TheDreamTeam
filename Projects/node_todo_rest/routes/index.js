var express = require('express');
var router = express.Router();

//*** NOTHING TO DO HERE

// Redirect to application
router.get('/', function(req, res, next) {
    console.log("Hit root");
    res.render('index');
});

module.exports = router;
