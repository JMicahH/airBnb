var mongoose = require('mongoose');

var Review = mongoose.model('Review');

module.exports = {

    // Requires listingId and review
    create: function(req,res){
        var newReview = new Review();
        newReview.review = req.body.review;
        newReview._guest = req.session.currentUser;
        newReview._listing = req.body.listingId;
        newReview.save(function(err){
            if (err){
                res.json({'error':'Error saving review'});
            } else {
                res.json({'good':'All good'});
            }
        });
    },

    // Requires reviewId
    deleteReview: function(req,res){
        Review.remove({_id: req.body.reviewId}, function(err){
            if (err){
                res.json({'error':'Error deleting review'});
            } else {
                res.json({'good':'All good'});
            }
        });
    },

    // Requires reviewId
    upVote: function(req,res){
        Review.findOne({_id: req.body.reviewId}, function(err, review){
            if (err){
                res.json({'error':'Error up voting'});
            } else {
                review.votes += 1;
                review.save(function(err){
                    if (err){
                        res.json({'error':'Error in saving review'});
                    } else {
                        res.json({'good':'All good'});
                    }
                })
            }
        });
    },
    
    // Requires reviewId
    downVote: function(req,res){
        Review.findOne({_id: req.body.reviewId}, function(err, review){
            if (err){
                res.json({'error':'Error down voting'});
            } else {
                review.votes -= 1;
                review.save(function(err){
                    if (err){
                        res.json({'error':'Error in saving review'});
                    } else {
                        res.json({'good':'All good'});
                    }
                })
            }
        });
    },
};