let logoutRoute = require('express').Router();

logoutRoute.route('/').get((req,res)=>{
    console.log('Log out');
});

logoutRoute.route('/').post((req,res)=>{
    console.log('Validate log out');
});

module.exports = logoutRoute;