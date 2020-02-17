let adminRouter = require('express').Router();
const Review = require('../models/Reviews');
const Category = require('../models/Categories');



adminRouter.route('/admin').get((req,res)=>{
    console.log('Home admin');
});


// ***************************user***************************************

adminRouter.route('/admin/user').get((req,res)=> {
    console.log('All user data');
});

// ***************************review***************************************


adminRouter.route('/admin/review').get((req,res)=> {
    console.log('All review data');
});

// ***************************board***************************************


// adminRouter.route('/admin/board').get((req,res)=> {
//     console.log('All board data');
// });

// ***************************banner***************************************


// adminRouter.route('/admin/banner').get((req,res)=> {
//     console.log('All banner data');
// });

// ***************************category***************************************


// adminRouter.route('/admin/category').get((req,res)=> {
//     console.log('All category');
// });



module.exports = adminRouter;