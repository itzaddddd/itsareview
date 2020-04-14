const userRoute = require('express').Router();
const mongoose = require('mongoose');
const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const registerRoute = require('./registerRoute');

const auth = require('../middleware/auth');

const User = require('../models/Users');
const Review = require('../models/Reviews')

// @route   GET user
// @desc    Get user data
// @access  Private
userRoute.route('/').get(auth,(req,res)=>{
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
        .catch(err => console.log(err));
});

// @route   GET user by id
// @desc    Get user data
// @access  Private
userRoute.route('/:id').get((req,res)=>{
    User.findById(req.params.id)
        .select('-password')
        .then(user => res.json(user))
        .catch(err => console.log(err));
});

// @route   GET raedlater
// @desc    GET read later
// @access  Private
userRoute.route('/:id/readlater').get((req,res)=>{
   User.findById(req.params.id,(err,user)=>{
       console.log(user.readLater)
       if(err)console.log(err)
       res.json(user.readLater)
   }) 
});

// @route   PUT readlater
// @desc    Update read later
// @access  Private
userRoute.route('/:id/readlater').put((req,res)=>{
    // find review by review id
    Review.findById(req.body.review_id,(err,review)=>{
        if(err)console.log(err)
        console.log('review',review)
        console.log('id ',req.params.id)
        //find user and update review to user's read later
        User.findByIdAndUpdate(
            req.params.id,
            {$push:{
                readLater: review
            }},
            {new:true},(err,user)=>{
                if(err)console.log(err)
                console.log('user readlater ',user.readLater)
                res.json(user.readLater)
        })
        // User.findById(req.params.id,(err,user)=>{
        //     if(err)console.log(err)
        //     console.log('user',user)
        //     res.json(user.readLater)
        // })
    })
    
    console.log('Add a review read later')
})

// @route   DELETE readlater
// @desc    Delete read later
// @access  Private
userRoute.route('/:id/readlater').delete((req,res)=>{
    // find review by review id
    console.log('review id ',req.body.review_id)
    Review.findById(req.body.review_id,(err,review)=>{
        console.log('review id ',req.body.review_id)
        if(err)console.log(err)
        console.log('review deleted',review)
        //find user and update review to user's read later
        User.findByIdAndUpdate(
            req.params.id,
            {$pull:{
                readLater: {_id:review._id}
            }},
            {new:true}
        ,(err,user)=>{
            if(err)console.log(err)
            console.log('user readlater',user.readLater)
            res.json(user.readLater)
        })
    })
    
    console.log('Delete a review read later')
})

userRoute.route('/:id/edit').put((req,res)=>{
    User.findByIdAndUpdate({_id:req.params.id},{
        $set:{
            userName: req.body.userName,
            userImage: req.body.userImage,
            userEmail: req.body.userEMail
        }
    },(err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    });
    console.log('Edit profile');
});

userRoute.use('/login',loginRoute);
userRoute.use('/logout',logoutRoute);
userRoute.use('/register',registerRoute);

module.exports = userRoute;
