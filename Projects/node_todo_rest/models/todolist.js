/*
	Todolist model object

  *** NOTHING TO DO HERE
*/
var TodoNote = require('./todonote.js');

function TodoList() {
    this.notes = [
        new TodoNote(1, 'Äta gröt', "", null),
        new TodoNote(2, 'Rensa sallad', "", null),
        new TodoNote(3, 'Jaga älg', "", null)
    ];
};

TodoList.prototype = (function() {

    function find(id, notes) {
        var result = notes.filter(function(v) {
            return v.id === id;
        });
        return result[0];
    }

    return {
        getNotes: function() { // Todo start, end
            return this.notes.sort(function compare(a, b) {
                if (a.id < b.id) {
                    return -1;
                } else if (a.id > b.id) {
                    return 1;
                } else {
                    return 0;
                }
            });
        },
        getById: function(id) {
            return find(id, this.notes);
        },
        create: function(note) {
            this.notes.push(note);
            console.log("Added to list")
        },

        update: function(note) {
            var old = this.delete(note.id);
            if (old) {
                note.id = old.id;
                note.dateTime = old.dateTime;
                this.create(note);
            }
        },
        delete: function(id) {
            var note = find(id, this.notes);
            if (note) {
                this.notes.splice(this.notes.indexOf(note), 1);
            }
            return note;
        },
        size: function() {
            return this.notes.length;
        }
    }
})();

module.exports = TodoList;
