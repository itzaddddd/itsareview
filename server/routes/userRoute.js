const userRoute = require('express').Router();
const mongoose = require('mongoose');
const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const registerRoute = require('./registerRoute');

const auth = require('../middleware/auth');

const User = require('../models/Users');

// @route   GET user
// @desc    Get user data
// @access  Private
userRoute.route('/').get(auth,(req,res)=>{
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
});

userRoute.route('/:id/edit').get((req,res)=>{
    User.findById({_id:req.params.id},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    });
    console.log('Show form for editing profile');
});

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
