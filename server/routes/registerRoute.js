let registerRoute = require('express').Router();
let User = require('../models/Users');

registerRoute.route('/').get((req,res)=>{
    console.log('Register');
});

registerRoute.route('/').post((req,res,next)=>{
    console.log(req.body);
    let userRegister = new User({
        userName: req.body.userName,
        userEmail: req.body.userEmail
    });
    console.log('userRegister : '+userRegister);
    User.register(userRegister, req.body.pass1,  
        (err,user)=>{
            if(err){
                console.log(err);
            }
            // passport.authenticate('local')(req,res, ()=>{
            //     req.session.save((err)=>{
            //         if(err){
            //             return next(err);
            //         }
            //         res.json(user);
            //     });
            // });
        
        });
       
});

module.exports = registerRoute;