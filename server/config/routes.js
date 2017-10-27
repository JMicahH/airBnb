var mongoose = require('mongoose');
// Change examples to your controllers
var users = require('../controllers/users.js')
var listings = require('../controllers/listings.js')
var reservations = require('../controllers/reservations.js')

module.exports = function(app){

    // user.get('/api/', function(req,res){
    //     users.index(req,res);
    // });

    app.get('/api/reservations/getYourReservations', function(req,res){
        reservations.getYourReservations(req,res);
    });

    app.get('/api/logout', function(req,res){
        req.session.currentUser = null;
        res.json({'good':'All good'})
    });

    app.get('/api/getUser', function(req,res){
        res.json({'loggedInUser': req.session.currentUser })
    });


    app.get('/api/listing/getYourListings', function(req,res){
        listings.getYourListings(req,res);
    });

    app.post('/api/reservation/deleteReservation', function(req,res){
        reservations.declineReservation(req,res);
    });

    app.post('/api/listing/deleteListing', function(req,res){
        listings.deleteListing(req,res);
    });

    app.post('/api/listing/search', function(req,res){
        listings.search(req,res);
    });

    app.post('/api/reservation/create', function(req,res){
        reservations.create(req,res);
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