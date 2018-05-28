const PATH = require("path");

// ROUTING

module.exports = function(APP) {
    // HTML GET Requests
    APP.get("/", function(req, res) {
      res.sendFile(PATH.join(__dirname, "../public/home.html"));
    });
  
    APP.get("/survey", function(req, res) {
      res.sendFile(PATH.join(__dirname, "../public/survey.html"));
    });
  
    // If no matching route is found default to home
    APP.get("*", function(req, res) {
      res.sendFile(PATH.join(__dirname, "../public/home.html"));
    });
  };
