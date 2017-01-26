var express = require('express');
var router = express.Router();
var list = require('./list.js');

// Hierarcical routing
router.use("/list", list);

router.get('/', function(req, res, next) {
    res.render('todo', {text: 'Your TODO list on the Web'});
});

module.exports = router;
