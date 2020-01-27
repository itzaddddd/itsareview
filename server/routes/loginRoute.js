let loginRouter = require('express').Router();

loginRouter.route('/').get((req,res)=>{
    console.log('Login');
});

loginRouter.route('/').post((req,res)=>{
    console.log('Validate login');
});

module.exports = loginRouter;