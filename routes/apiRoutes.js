// require the js file that has the data
const FRIENDS = require("../data/friends");

// API ROUTING
module.exports = function (APP) {
    // HTML GET Requests
    APP.get("/api/friends", function (req, res) {
        res.json(FRIENDS);
    });
    APP.post("/api/friends", function (req, res) {
        FRIENDS.push(req.body);
        res.json(true);
    });
  APP.post("/api/clear", function() {
    // Empty out the arrays of data
    FRIENDS = [];
    console.log(FRIENDS);
  });

};
