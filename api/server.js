// Created server with express
const express = require("express");
const bodyParser = require("body-parser");
// To resolve error with cross origin
const cors = require('cors');
// An instance of express to serve our end points
const app = express();
app.use(cors());
const port = process.env.PORT || 88;
const fs = require("fs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
require("./routes/routes.js")(app, fs);
app.listen(port);