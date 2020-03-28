const reviewRoute = require('express').Router();
const Review = require('../models/Reviews');
const User = require('../models/Users');
const Category = require('../models/Categories')

reviewRoute.route('/').get((req,res)=>{
    Review.find({},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    });
    console.log('All reviews');
});

reviewRoute.route('/create').get((req,res)=>{
    res.send('Review creating form');
    console.log('Show form for creating a review');
});

// @route   POST /review/create
// @desc    Create a review 
// @access  Public
reviewRoute.route('/create').post((req,res)=>{
    const {userName,rvTitle, rvChar, rvContent, rvImageUrl, rvType, rvTag, rvStatus, rvSource} = req.body;
    
    // find user_id by userName
    if(userName == 'Guest'){
        const review = new Review({
            user_id: 'บุคคลทั่วไป',
            rvTitle: rvTitle,
            rvChar: rvChar,
            rvContent: rvContent,
            rvImage: rvImageUrl,
            rvType: rvType,
            rvTag: rvTag,
            rvStatus: rvStatus,
            rvSource: rvSource
        });
        // save review
        review.save((err, result)=>{
            if(err){
                console.log('Error : ',err)
            }else{
                res.json(result);
            }
        });
    }else{
        User.findOne({userName: userName}, (err,result)=>{
            if(err) console.log(err);
            let user_id = result._id
            // define new review
            const review = new Review({
                user_id: user_id,
                rvTitle: rvTitle,
                rvChar: rvChar,
                rvContent: rvContent,
                rvImage: rvImageUrl,
                rvType: rvType,
                rvTag: rvTag,
                rvStatus: rvStatus,
                rvSource: rvSource
            });
            // save review
            review.save((err, result)=>{
                if(err){
                    console.log('Error : ',err)
                }else{
                    // update logReview
                    User.findOneAndUpdate(
                        {userName: userName},
                        {$push: {
                            logReview: result
                            }
                        }
                    )
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
                    res.json(result);
                }
            });
        });
    }
    console.log('Create a review');
});

reviewRoute.route('/category/:id').get((req,res)=>{
    Category.findById({_id:req.params.id},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    });
    console.log('Show reviews in the category by id');
});

// @route   GET /review/:id
// @desc    Get a review by id
// @access  Public
reviewRoute.route('/:id').get((req,res)=>{
    Review.findById({_id:req.params.id},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log(result)
            res.json(result);
        }
    });
    console.log('Get a review');
});

reviewRoute.route('/:id/edit').get((req,res)=>{
    Review.findById({_id:req.params.id},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    });
    console.log('Show form for editing a review');
});

reviewRoute.route('/:id/edit').put((req,res)=>{
    Review.findByIdAndUpdate({_id:req.params.id},{
        $set: {
            rvTitle: req.body.rvTitle,
            rvAuthor: req.body.rvAuthor,
            rvType: req.body.rvType,
            rvTag: req.body.rvTag,
            rvChar: req.body.rvChar,
            rvContent: {
                rvStory: req.body.rvStory,
                rvImage: req.body.rvImage
            },
            rvStatus: req.body.rvStatus,
            rvNovel: {
                rvSource: req.body.rvSource,
                rvLink: req.body.rvLink
            },
            rvRate: req.body.rvRate,
        }
    },(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    });
    console.log('Edit review');
});

reviewRoute.route('/:id').delete((req,res)=>{
    Review.findByIdAndRemove({_id:req.params.id},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    });
    console.log('Delete review');
});

module.exports = reviewRoute;
