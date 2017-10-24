var mongoose = require('mongoose');

var Listing = mongoose.model('Listing');

module.exports = {

    index: function(req,res){
        // Function does stuff here!
    },

    getListing: function(req,res){
        Listing.findOne({_id: req.params.listingId}, function(err, listing){
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
        newListing.decs = req.body.decs;
        newListing.address = req.body.address;
        if(req.body.apartmentNumber){
            newListing.address = req.body.address;
        }
        newListing.city = req.body.city;
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
                res.json({error:'Listing save error'})
            } else {
                res.json({good: 'All good'})
            }
        })
    },

};