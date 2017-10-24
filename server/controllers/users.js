var mongoose = require('mongoose');
var session = require('express-session');

// Change example to your model from your models folder
var User = mongoose.model('User');

module.exports = {

    index: function (req, res) {
        // Function does stuff here!
    },

    create: function (req, res) {
        var newUser = new User();
        newUser.firstName = req.body.firstName;
        newUser.lastName = req.body.lastName;
        newUser.email = req.body.email;
        newUser.phone = req.body.phone;
        if (req.body.password === req.body.confirmPassword) {
            newUser.password = req.body.password;
        }
        req.session.currentUser = newUser._id
        console.log("<>Users.js / create / Added to Session", req.session.currentUser)
        newUser.save(function (err) {
            if (err) {
                res.json(err)
            } else {
                res.json({
                    'good': 'good'
                })
            }
        })
    },


    login: function (req, res) {
        console.log("<>Users Controller / Login", req.body)            
        User.findOne({email: req.body.email}, function(err, user){
            if (!user) {
                console.log("No User Match Found")
                console.log(err)
                res.json({
                    'error': 'No User Match Found'
                })            
            } else {
                console.log("User Match Found")                
                if(user.password === req.body.password){
                    console.log("Password Match Found")  
                    req.session.currentUser = user._id                    
                    console.log("<>Users.js / create / Added to Session", req.session.currentUser)          
                    res.json({
                        'good': 'good'
                    })
                } else {
                    console.log("No Password Match Found")                                                  
                    res.json({'password': 'password not correct'})
                }   
                }
            })
    }

};