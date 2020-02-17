const loginRouter = require('express').Router();
const passport = require('passport');
const User = require('../models/Users');

require('../config/passport');
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// require('../config/passport');

// loginRouter.route('/').get((req,res)=>{
    
// });

loginRouter.route('/').post(passport.authenticate('local',{
    failureRedireact: '/',
}),(req,res,next)=>{
    console.log('session : ',req.session);
    req.session.save(err=>{
        if(err){
            return(next(err));
        }
        return res.json(req.session);
    });
});

module.exports = loginRouter;