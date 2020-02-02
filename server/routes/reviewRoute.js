const reviewRoute = require('express').Router();
const Review = require('../models/Reviews');
const Category = require('../models/Categories');

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

reviewRoute.route('/create').post((req,res)=>{
    let review = new Review({
        rvTitle: req.body.rvTitle,
        rvAuthor: req.body.rvAuthor,
        userID: req.session._id,
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
    });

    review.save((err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.json(result);
        }
    });
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

reviewRoute.route('/:id').get((req,res)=>{
    Review.findById({_id:req.params.id},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    });
    console.log('Show a review');
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
