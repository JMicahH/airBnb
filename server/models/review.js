var mongoose = require('mongoose')

// For table relationships
var Schema = mongoose.Schema;

var reviewSchema = new mongoose.Schema({
    review: {type: String, required: true, minlength: 5},
    votes: {type: Number, required: true, default: 0},

    // One to Many
    _guest: {type: Schema.Types.ObjectId, ref: 'User'},
    _listing: {type: Schema.Types.ObjectId, ref: 'Listing'},
});

var Review = mongoose.model('Review', reviewSchema);