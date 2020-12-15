
// Dependencies
// ============================
var express = require("express");
const path = require("path");

// Sets up the Express App
// ============================
var app = express();
var PORT = 3333;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.get("/", function(req, res) {
//     res.send("hello world!");
// });


// //PATHS 

//PATH htmls
//PATH to home.html 
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "./reservation.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "./tables.html"));
});

app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./home.html"));
});

// PATH to notes.html 
const notes = app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/notes.html"));
});





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
