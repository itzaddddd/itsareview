let logoutRoute = require('express').Router();

logoutRoute.route('/').post((req,res)=>{
    req.session.destroy();
    res.logout();
    res.redirect('/');
    console.log('Validate log out');
});

module.exports = logoutRoute;