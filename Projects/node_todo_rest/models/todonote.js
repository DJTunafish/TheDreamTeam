/*

 A model object


  *** NOTHING TO DO HERE
*/

var counter = 100;

function TodoNote(id, text, date, done) {
    this.id = (!id)
        ? counter++
        : id;
    this.text = (!text)
        ? "empty"
        : text;
    this.dateTime = (!date)
        ? new Date()
        : date;
    this.done = (!done)
        ? false
        : done;
};

module.exports = TodoNote;
