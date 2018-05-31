// dependencies
var express = require("express");
var bodyParser = require("body-parser");

//setting up express app
var app = express();
var PORT = process.env.PORT || 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ etended: true }));

// parse application/json
app.use(bodyParser.json());

// Static Directory
app.use(express.static("app/public"));

// routes
require("./app/routes/html-routes.js")(app);

// starts server to begin listening
app.listen(PORT, function() {
    console.log("app listening on PORT " + PORT);
});