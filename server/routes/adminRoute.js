let adminRouter = require('express').Router();

adminRouter.route('/').get((req,res)=>{
    console.log('Home admin');
});