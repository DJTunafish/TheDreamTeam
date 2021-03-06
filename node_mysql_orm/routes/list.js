var express = require('express');
var TodoNote = require('../models/todonote.js');

var router = express.Router();

// List notes for current user
//find all notes and then render them in list.html
router.get('/', function(req, res, next) {
    TodoNote.findAll().then(function(notes){
        res.render('list', {todolist : notes}); //more
    });

});

//create a new note and then redirect to list
router.post('/add', function(req, res, next) {
    TodoNote.create({text: req.body.text, dateTime: new Date(), done: false}).then(function(){
            res.redirect('/todo/list');
       })
});

//go to add.html
router.get('/add', function(req, res, next) {
    res.render('add');
});

//go to deletion of a note
router.get('/delete/:id', function(req, res, next) {
        console.log(req.params.id);
    var note = TodoNote.findById(parseInt(req.params.id)).then(function(note){
        res.render('delete', {note: note});
    });

});

//find the correct note in db and then destroy it, go to list
router.post('/delete', function(req, res, next) {
    var id = parseInt(req.body.id);
    TodoNote.findById(id).then(function(note){
        return note.destroy();
    }).then(function(){
        res.redirect('/todo/list');
    });
});

module.exports = router;
