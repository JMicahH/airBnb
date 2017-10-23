var mongoose = require('mongoose')

// For table relationships
var Schema = mongoose.Schema;

// Change example here to table name
var userSchema = new mongoose.Schema({
    firstName: {type: String, required: true, minlength: 2},
    lastName: {type: String, required: true, minlength: 2},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 8},

    // Example of a relationship to another table
    // relationship: [{type: Schema.Types.ObjectId, ref: 'Relation_Table'}],
});

// Change example here too
var User = mongoose.model('User', userSchema);