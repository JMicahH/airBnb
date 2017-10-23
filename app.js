var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

app.use(session({
    secret: 'Shhh...',
    saveUninitialized: true,
    resave: true,
}));

// Body Parser uses json now
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Set this route to your angular app name, in this case frontEnd
app.use(express.static(path.join(__dirname, '/frontEnd/dist')));

// This is DB stuff, check this file out
require('./server/config/mongoose.js')


var routeSetter = require('./server/config/routes.js');
routeSetter(app);

// Listen for whatever port you want
app.listen(6677, function(){
    console.log('//')
    console.log('Port 6677');
    console.log('//')
});