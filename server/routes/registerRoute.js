let registerRoute = require('express').Router();
let User = require('../models/Users');

registerRoute.route('/').get((req,res)=>{
    console.log('Register');
});

registerRoute.route('/').post((req,res,next)=>{
    User.register(new User({
        userName: req.body.userName,
        userImage: req.body.userImage,
        userEmail: req.body.userEmail
    })),
    req.body.pass1,(err,user)=>{
        if(err){
            console.log(err);
        }else{
            passport.authenticate('local')(req,res, ()=>{
                req.session.save((err)=>{
                    if(err){
                        return next(err);
                    }
                    res.json(user);
                });
            })
        }
    }    
});

module.exports = registerRoute;