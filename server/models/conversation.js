var mongoose = require('mongoose')

// For table relationships
var Schema = mongoose.Schema;

var conversationSchema = new mongoose.Schema({
    messages: {type: Object, default: []},

    // One to Many
    _guest: {type: Schema.Types.ObjectId, ref: 'User'},
    _listing: {type: Schema.Types.ObjectId, ref: 'Listing'},
});

var Conversation = mongoose.model('Conversation', conversationSchema);