var mongoose = require('mongoose');

var Reservation = mongoose.model('Reservation');

module.exports = {

    // Send back a dictionary of
    // info = {
    //  listingId: 
    //  startDate:
    //  endDate:
    // }
    create: function(req,res){
        var newReservation = new Reservation();
        newReservation.startDate = req.body.startDate;
        newReservation.endDate = req.body.endDate;
        newReservation._guest = req.session.currentUser;
        newReservation._listing = req.body.listingId;
        newReservation.save(function(err){
            if (err){
                res.json({'error': 'Error adding reservation'})
            } else {
                res.json({'good': 'All good'})
            }
        });
    },

    // Requires the req.body.listingId
    findNotConfirmed: function(req,res){
        Reservation.find({_listing: req.body.listingId, confirmed: false}, function(err, reservations){
            if (err){
                res.json({'error':'Error finding reservations'});
            } else {
                res.json({'reservations': reservations});
            }
        });
    },
    
    // Requires the req.body.listingId
    findConfirmed: function(req,res){
        Reservation.find({_listing: req.body.listingId, confirmed: true}, function(err, reservations){
            if (err){
                res.json({'error':'Error finding reservations'});
            } else {
                res.json({'reservations': reservations});
            }
        });
    },

    // Requires the req.body.reservationId
    confirmReservation: function(req,res){
        Reservation.findOne({_id: req.body.reservationId}, function(err, reservation){
            if (err){
                res.json({'error':'Error finding reservation'});
            } else {
                reservation.confirmed = true;
                reservation.save(function(err){
                    if (err){
                        res.json({'error':'Error saving reservation'});
                    } else {
                        res.json({'good': 'All good'});
                    }
                });
            }
        });
    },

    // Require the req.body.reservationId
    declineReservation: function(req,res){
        Reservation.remove({_id: req.body.reservationId}, function(err){
            if (err){
                res.json({'error':'Error removing reservation'});
            } else {
                res.json({'good':'All good'});
            }
        });
    },

};