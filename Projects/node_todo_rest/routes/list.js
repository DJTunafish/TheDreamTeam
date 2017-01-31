var express = require('express');
var TodoNote = require('../models/todonote.js');
var TodoList = require('../models/todolist.js');

var todolist = new TodoList();
var router = express.Router();

// TODO Add rest methods

router.get("/", function(req, res, next) {
    console.log("qfasasf");
    console.log(todolist.getNotes());
    res.json(todolist.getNotes()); //TODO, make this shit fancy, get a database going
});

router.get("/count", function(req, res, next){
    res.json({count: todolist.size()});
});

router.get("/:id" , function(req, res, next) {
    console.log("id request");
    res.json(todolist.getById(parseInt(req.params.id)));
    
 });

router.post("/", function(req, res, next) {
    var newNote = new TodoNote(todolist.size() + 1, req.body.text, new Date(), false);
    todolist.create(newNote);
    res.status(201).json(newNote);
});

router.put("/:id", function(req, res, next){
    var note = todolist.getById(parseInt(req.params.id));

    if(note != undefined && note != null){
        
        var status = req.body.done;
        var text   = req.body.text;
        todolist.update(new TodoNote(note.id, text, note.dateTime, status));
        res.sendStatus("200");
    }else{
        res.status(404).send("No such task");
    }

});

router.delete("/:id", function(req, res, next){
    var note = todolist.getById(parseInt(req.params.id));

    if(note != undefined && note != null){
        todolist.delete(parseInt(req.params.id));
        res.sendStatus("200");
    }else{
        res.status(404).send("No such task");
    }
});


module.exports = router;
