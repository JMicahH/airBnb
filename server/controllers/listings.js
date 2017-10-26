var mongoose = require('mongoose');

var Listing = mongoose.model('Listing');
var User = mongoose.model('User');
var Review = mongoose.model('Review');

module.exports = {

   search: function(req,res){
       var city = req.body.city.toLowerCase();
        Listing.find({'city': city, 'state': req.body.state}, function(err,listings){
            if (err){
                console.log(err)
                res.json({'error':'Error getting listings'});
            } else {
                res.json({'listings':listings});
            }
        });
    },

   getYourListings: function(req,res){
        Listing.find({_host: req.session.currentUser}, function(err,listings){
            if (err){
                console.log(err)
                res.json({'error':'Error getting listings'});
            } else {
                res.json({'listings':listings});
            }
        });
    },

    // Requires id
    deleteListing: function(req,res){
        Listing.remove({_id: req.body.id}, function(err){
            if (err){
                res.json({'error':'Error deleting listing'});
            } else {
                res.json({'good':'All good'});
            }
        });
    },

    // Added populating reviews, it is untested so be careful
    getOne: function(req,res){
        Listing.findOne({_id: req.body.id})
        .populate('reviews')
        .exec(function(err, listing){
            if (err){
                res.json({'error': err});
            } else {
                res.json({'listing': listing});
            }
        });
    },

    create: function(req,res){
        var newListing = new Listing();
        newListing.title = req.body.title;
        newListing.desc = req.body.desc;
        newListing.address = req.body.address;
        if(req.body.apartmentNumber){
            newListing.address = req.body.address;
        }
        var city = req.body.city.toLowerCase();
        newListing.city = city;
        newListing.state = req.body.state;
        newListing.zip = req.body.zip;
        if(req.body.image){
            newListing.image = req.body.image;
        }
        newListing.price = req.body.price;
        newListing.maxGuests = req.body.maxGuests;
        newListing.type = req.body.type;
        newListing.beds = req.body.beds;
        newListing.baths = req.body.baths;
        newListing.amenities = req.body.amenities;

        // Make sure this is the right session key
        newListing._host = req.session.currentUser;

        newListing.save(function(err){
            if (err){
                res.json({error:'Listing save error'});
            } else {
                User.findOne({_id: req.session.currentUser}, function(err,user){
                    if (err){
                        res.json({error:'Finding user error'});
                    } else {
                        user.host = true;
                        user.save(function(err){
                            if (err){
                                res.json({error: 'New host save error'});
                            } else {
                                res.json({good: 'All good'});
                            }
                        });
                    }
                });
            }
        });
    },

};