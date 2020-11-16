// Require Express
var express = require("express");

// Create Express Server
var app = express();

// Setting Express Server - Declaring JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requiring public folder
app.use(express.static("Develop/public"));

// Point server to route files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Set initial PORT
const PORT = process.env.PORT || 8080;

// Listen on the PORT
app.listen(PORT, function() {
    console.log("App is listening on PORT")
});