let registerRoute = require('express').Router();
let User = require('../models/Users');
let passport = require('passport');
require('../config/passport');

registerRoute.route('/').get((req,res)=>{
    console.log('Register');
});

registerRoute.route('/').post((req,res,next)=>{
    let newUser = new User({
        userName: req.body.userName,
        userEmail: req.body.userEmail
    });
    User.register(newUser,req.body.pass1,(err,user)=>{
        console.log("user : ",user);
        if(err){
            console.log(err);
            return next(err);
        }
        passport.authenticate('local')(req,res,()=>{
            req.session.save(err=>{
                if(err){
                    console.log(err)
                    return next(err);
                }
                res.send(user);
            });
        });
    }); 
});

module.exports = registerRoute;