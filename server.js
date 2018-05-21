//::::::::::::DEPENDENCIES:::::::::::::::::
const EXPRESS = require("express");
const BODYPARSER = require("body-parser");
const PATH = require("path");
const MYSQL = require("mysql");

//:::::::::::: MYSQL CONNECT :::::::::
// var connection = mysql.createConnection({
//     host     : process.env.DB_HOST | 'localhost',
//     user     : process.env.DB_USER | 'root',
//     port:    PORT, 
//     password : process.env.DB_PASS | '' ,
//     database : process.env.DB_NAME | 'reservationDB' 
// }); 

// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId + "\n");
// });


//:::::::::::: GLOBAL VARIABLES :::::::::


//:::::::::::: EXPRESS CONFIGURATION :::::::::
// Tells node that we are creating an "express" server
var APP = EXPRESS();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8180;

// Sets up the Express APP to handle data parsing
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.json());

//:::::::::::::::::ROUTES::::::::::::::::::::::::
// The below points our server to a series of "route" files.
APP.get('/', function(req, res) {
    res.sendFile(PATH.join(__dirname, "public/home.html"));
});

APP.get('/survey', function(req, res) {
    res.sendFile(PATH.join(__dirname, "public/survey.html"));
});

//:::::::::::::::::LISTENER::::::::::::::::::::::::
// Starts the server to begin listening
APP.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
