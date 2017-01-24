/*

    This is the control part connecting the table module and the page

*/
// Function run when DOM is finished loading (= document.ready() )

$(function() {

    // Connecting eventhandlers to elements, jQuery style

    $("#create").on("click", control.createTable); 
    $("#edit").on("click", control.editTable); 
});

// Dummy data
var data = "The Document Object Model (DOM) is a programming interface for" +
"HTML, XML and SVG documents. It provides a structured representation of the" + " document as a tree. The DOM defines methods that allow access to the tree," + " so that they can change the document structure, style and content.";

// Singleton control object, using immediate invoke pattern
// Control interaction between DOM and table module.
// Only use jQuery DOM API
var control = (function() {

    table : null;
    tableExists = false;

    return {createTable: function() {
        var rows = $("#rows").val();
        var cols = $("#cols").val();
        var stripes = $("#striped").is(':checked');
        table = new Table(parseInt(rows), parseInt(cols), data, stripes); 
        var tbl = table.render();
        console.log("Created table, ran render");
        if(!tableExists){
            tbl.id = "table";
            $("#parent").append(tbl);
            console.log("no table");
            tableExists = true;
        }else{
            $("#table").remove();
            tbl.id = "table";
            $("#parent").append(tbl);
            console.log("replaced table");
        }
    }, editTable: function() {
        if(table != null){
            var row = $("#row").val();
            var col = $("#col").val();
            var v   = $("#value").val();    
            console.log("PINGUS");
            table.edit(row, col, v);
        }
    }}
})();
