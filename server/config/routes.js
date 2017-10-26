var mongoose = require('mongoose');
// Change examples to your controllers
var users = require('../controllers/users.js')
var listings = require('../controllers/listings.js')

module.exports = function(app){

    // user.get('/api/', function(req,res){
    //     users.index(req,res);
    // });

    app.get('/api/listing/getYourListings', function(req,res){
        listings.getYourListings(req,res);
    });

    app.post('/api/listing/create', function(req,res){
        listings.create(req,res);
    });

    app.post('/api/user/create', function(req,res){
        users.create(req,res);
    });

    app.post('/api/listing/getListing', function(req,res){
        listings.getOne(req,res);
    });

    app.post('/api/user/login', function(req,res){
        console.log("<>Routes.js / Login", req.body)            
        users.login(req,res);
    });

    
    app.all("*", (req,res,next) => {
        // Change name of angular file, in this case frontEnd
        res.sendFile(path.resolve("./frontEnd/dist/index.html"))
    });
};