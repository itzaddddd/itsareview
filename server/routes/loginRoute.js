const loginRouter = require('express').Router();
const passport = require('passport');
const User = require('../models/Users');

require('../config/passport');
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// require('../config/passport');

loginRouter.route('/').get((req,res)=>{
    console.log('Login');
});

loginRouter.route('/').post(passport.authenticate('local',{
    successRedirect: '/user/:id',
    failureRedireact: '/',
    failureFlash: true
}),(req,res,next)=>{
    console.log('session : ',req.session);
    req.session.save(err=>{
        if(err){
            return(next(err));
        }
        res.redirect("/");
    });
});

module.exports = loginRouter;