//::::::::::::DEPENDENCIES:::::::::::::::::
const EXPRESS = require("express");
const BODYPARSER = require("body-parser");
const PATH = require("path");
//const ROUTER = require('./routes/htmlRoutes.js');

//:::::::::::: EXPRESS CONFIGURATION :::::::::
// Tells node that we are creating an "express" server
const APP = EXPRESS();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8185;
APP.use(EXPRESS.static(PATH.join(__dirname, 'public')));
// Sets up the Express APP to handle data parsing
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.json());

require("./routes/apiRoutes")(APP);
require("./routes/htmlRoutes")(APP);

//:::::::::::::::::LISTENERS::::::::::::::::::::::::
// Starts the server to begin listening
APP.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
