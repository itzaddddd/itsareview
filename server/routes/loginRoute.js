let loginRouter = require('express').Router();

loginRouter.route('/').get((req,res)=>{
    console.log('Login');
});

loginRouter.route('/').post(passport.authenticate('local',{
    successRedirect: '/',
    failureRedireact: '/'
}),(req,res,next)=>{
    req.session.save((err)=>{
        if(err){
            return(next(err));
        }
    });
});

module.exports = loginRouter;