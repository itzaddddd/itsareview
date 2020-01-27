let registerRoute = require('express').Router();
let User = require('../models/Users');

registerRoute.route('/').get((req,res)=>{
    console.log('Register');
});

registerRoute.route('/').post((req,res)=>{
    console.log(json(req.body));
});

module.exports = registerRoute;