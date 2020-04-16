const reviewRoute = require('express').Router();
const Review = require('../models/Reviews');
const User = require('../models/Users');
const Category = require('../models/Categories')
const RegexEscape = require('escape-regexp')

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

// @route   GET /review/category?category=category
// @desc    Get a type of review by id
// @access  Public
reviewRoute.route('/category').get((req,res)=>{
    Review.find({rvType:req.query.category},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    });
    console.log('Show reviews in the category by id');
});

// @route   GET /review/tag/:id
// @desc    Get a tag of review by id
// @access  Public
reviewRoute.route('/tag').get((req,res)=>{

    Review.find({rvTag:req.query.tag},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    });
    console.log('Show reviews in the tag by id');
});

// @route   GET /review/:id
// @desc    Get a review by id
// @access  Public
reviewRoute.route('/:id').get((req,res)=>{
    console.log('id form route :',req.params.id)
    Review.findById(req.params.id,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    });
    console.log('Get a review');
});
// @route   GET /review/:id/edit
// @desc    Get form for editing a review
// @access  Private
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
// @route   Put /review/:id/edit
// @desc    Edit a review
// @access  Private
reviewRoute.route('/:id/edit').put((req,res)=>{
    console.log('edit id : ',req.params.id)
    Review.findOneAndUpdate({_id: req.params.id},{
        $set:{
            rvTitle: req.body.rvTitle,
            rvType: req.body.rvType,
            rvTag: req.body.rvTag,
            rvChar: req.body.rvChar,
            rvContent: req.body.rvContent,
            rvStatus: req.body.rvStatus,
            rvSource: req.body.rvSource
        }
    },{new:true},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            /* response updated review */
            res.json(result);
            /* update logReview's user */
            User.findOneAndUpdate({
                'userName':req.body.userName,
                'logReview._id':result._id
            },{
                $set:{
                    "logReview.$": result                
            }},{new: true},(err,result)=>{
                if(err)console.log(err);
            })
        }
    });
    console.log('Edit review');
});
// @route   Delete /review/:id
// @desc    Edit a review
// @access  Private
reviewRoute.route('/:id').delete((req,res)=>{
    Review.findOneAndRemove({_id:req.params.id},(err,review)=>{
        if(err)console.log(err)
        console.log('deleted review : ',review)
        User.findOneAndUpdate({_id:review.user_id},{
            $pull: {'logReview':{_id:review._id}}
        },{new:true},(err,user)=>{
            if(err)console.log(err)
            console.log('user log review ',user.logReview)
            res.json(user)
        })
    });
    console.log('Delete review');
});

module.exports = reviewRoute;
