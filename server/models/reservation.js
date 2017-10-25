var mongoose = require('mongoose')

// For table relationships
var Schema = mongoose.Schema;

var reservationSchema = new mongoose.Schema({
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},

    confirmed: {type: Boolean, default: false},

    // One to Many
    _guest: {type: Schema.Types.ObjectId, ref: 'User'},
    _listing: {type: Schema.Types.ObjectId, ref: 'Listing'},
});

var Reservation = mongoose.model('Reservation', reservationSchema);