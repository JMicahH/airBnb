var mongoose = require('mongoose');
// Change example to your model from your models folder
var User = mongoose.model('User');

module.exports = {

    index: function(req,res){
        // Function does stuff here!
    },

    create: function(req,res){
        var newUser = new User();
        newUser.firstName = req.body.firstName;
        newUser.lastName = req.body.lastName;
        newUser.email = req.body.email;
        if (req.body.password === req.body.confirmPassword){
            newUser.password = req.body.password;
        }
        newUser.save(function(err){
            if (err){
                res.json(err)
            } else {
                res.json({'good':'good'})
            }
        })
    },

};