const userRoute = require('express').Router();

const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const registerRoute = require('./registerRoute');

const User = require('../models/Users');
userRoute.route('/:id').get((req,res)=>{
    User.findById({_id:req.params.id},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    });
    console.log('Profile');
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
