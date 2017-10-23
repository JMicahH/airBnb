var mongoose = require('mongoose')

// For table relationships
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    firstName: {type: String, required: true, minlength: 2},
    lastName: {type: String, required: true, minlength: 2},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 8},
    host: {type: Boolean, required: true, default: false},
    phone: {type: String, required: true},
    image: {type: String},

    // One to Many
    listings: [{type: Schema.Types.ObjectId, ref: 'Listing'}],
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}],
    conversations: [{type: Schema.Types.ObjectId, ref: 'Conversation'}],
});

var User = mongoose.model('User', userSchema);