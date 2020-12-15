
// Dependencies
// ============================
var express = require("express");
const path = require("path");
// const dataTablesArr = require("./dataTables");
// const dataReservationsArr = require("./dataReservations");
    // console.log(dataReservationsArr)

// Sets up the Express App
// ============================
var app = express();
var PORT = 3333;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//DATA
const dataTablesArr=[
    {
    name: "yoda",
    phone: "Yoda",
    email: "Jedi Master",
    uniqueID: 999,
    }
  ];
const dataWaitListArr=[
    {
    name: "darth maul",
    phone: "maul",
    email: "sith Master",
    uniqueID: 1000,
    }
  ]

// //PATHS 

//PATH htmls
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "./reservation.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "./tables.html"));
});



// Displays all tables
app.get("/api/tables", function(req, res) {
    console.log(dataTablesArr)
    return res.json(dataTablesArr);
  });

// Displays all reservations
app.get("/api/reservations", function(req, res) {
    console.log(dataWaitListArr)
    return res.json(dataWaitListArr);
  });

  // Create New tables - takes in JSON input
app.post("/api/tables", function(req, res) {

    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
  
    var newTable = req.body;
  
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newTable.uniquID = newCharacter.name.replace(/\s+/g, "").toLowerCase();
    if (dataTablesArr.length < 5){
        dataTablesArr.push(newTable)
    }else{
        dataWaitListArr.push(newTable)
    }
    console.log(newTable);
  
    characters.push(newTable);
  
    res.json(newTable);
  });


app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./home.html"));
});
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


