var express = require('express');
var router = express.Router();
var list = require('./list.js');

//*** NOTHING TO DO HERE

// Hierarcical routing
router.use("/list", list);

module.exports = router;
