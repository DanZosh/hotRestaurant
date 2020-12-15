var express = require("express");

var app = express();
var PORT = 3333;

app.get("/", function(req, res) {
    res.send("hello world!");
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
