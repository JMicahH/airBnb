var mongoose = require('mongoose')

// For table relationships
var Schema = mongoose.Schema;

var listingSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 2},
    desc: {type: String, required: true, minlength: 5},
    address: {type: String, required: true, minlength: 3},
    apartmentNumber: {type: String},
    city: {type: String, required: true, minlength: 2},
    state: {type: String, required: true, minlength: 2},
    zip: {type: String, required: true, minlength: 5},
    image: {type: String},

    price: {type: Number, required: true},
    maxGuests: {type: Number, required: true},
    type: {type: String, required: true},
    beds: {type: Number, required: true},
    baths: {type: Number, required: true},
    amenities: {type: Object, required: true},

    // One to Many
    _host: {type: Schema.Types.ObjectId, ref: 'User'},
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}],
    reservations: [{type: Schema.Types.ObjectId, ref: 'Reservation'}],
    conversations: [{type: Schema.Types.ObjectId, ref: 'Conversation'}],
});

var Listing = mongoose.model('Listing', listingSchema);