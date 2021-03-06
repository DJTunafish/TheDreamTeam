/*

    The router for all /list/* pathes


    NOTE:  Order of pathes IMPORTANT
    Express will try to match top down
    If something before matches, .... then what should match NOT executed.
*/

var express = require('express');
var TodoNote = require('../models/todonote.js');
var TodoList = require('../models/todolist.js');

var todolist = new TodoList();
var router = express.Router();

// List notes for current user
router.get('/', function(req, res, next) {
    if(req.session.currentUser != ""){
        var notes = todolist.getNotes();
        res.render("list", {tasks:notes, currentUser:req.session.currentUser});
    }else{
        res.redirect("/todo");
    }
});

router.get('/add', function(req, res, next) {
    res.render("add", {currentUser:req.session.currentUser});
});

router.post('/add', function(req, res, next) {
    var text = req.body.text;
    var newTask = new TodoNote((todolist.size() + 1), text, new Date(), false);  
    todolist.add(newTask);   

    res.redirect("/todo/list");
});

router.get('/delete', function(req, res, next) {
    var task = todolist.getById(parseInt(req.param("id")));
    res.render('delete', {note:task, currentUser:req.session.currentUser});
});

router.post('/delete', function(req, res, next) {
    todolist.delete(parseInt(req.body.id));
    var allTasks = todolist.getNotes();
    
    for(i = (parseInt(req.body.id) - 1); i < allTasks.length; i++){
        allTasks[i].id = allTasks[i].id - 1;
    }
    res.redirect("/todo/list");
});

router.get('/edit', function(req, res, next) { //TODO: Full text from everything doesn't show, fix.
    var id = req.param('id');
    var task = todolist.getById(parseInt(id));
    res.render("edit", {id:task.id, text:task.text, date:task.dateTime, currentUser:req.session.currentUser});
});

router.post('/edit', function(req, res, next) {
    var newId = parseInt(req.body.id);
    var newText = req.body.text;
    var newDate = new Date(req.body.date);
    var newTask = new TodoNote(newId, newText, newDate, false);
    todolist.update(newTask);

    res.redirect("/todo/list");
});






module.exports = router;
