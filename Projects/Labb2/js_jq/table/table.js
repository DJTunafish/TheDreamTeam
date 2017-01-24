/*
   A function to create a HTML-table
   Using plain JS and standard DOM API

*/

// The function to implement
function createTable(rows, cols, data) {

    var tbl = document.createElement("table");
    var row = document.createElement("tr");
    tbl.appendChild(row);    

    for (i = 0; i < rows*cols; i++) { 
        if(i % cols == 0){
            row = document.createElement("tr");
            tbl.appendChild(row);
        }
        var col = document.createElement("td");
        row.appendChild(col);
        if(i < data.length){
            col.innerHTML = data[i];
        }else{
            col.innerHTML = "undefined";
        }
    }

    return tbl;
}

// Dummy data
var data = "The Document Object Model (DOM) is a programming interface for" +
"HTML, XML and SVG documents. It provides a structured representation of the" + " document as a tree. The DOM defines methods that allow access to the tree," + " so that they can change the document structure, style and content.";

// Executed at download
var parent = document.getElementById("parent");
var table = createTable(10, 5, data.split(" "));
parent.appendChild(table);
