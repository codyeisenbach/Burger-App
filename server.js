var express = require("express");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var connection = require('connection')

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

// Set Handlebars as the view engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/burger_controller.js');

app.use('/', routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });