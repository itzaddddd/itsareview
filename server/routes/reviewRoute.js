const reviewRoute = require('express').Router();

reviewRoute.route('/').get((req,res)=>{
    console.log('All reviews');
});

reviewRoute.route('/create').get((req,res)=>{
    console.log('Show form for creating a review');
});

reviewRoute.route('/create').post((req,res)=>{
    console.log('Create a review');
});

reviewRoute.route('/category/:id').get((req,res)=>{
    console.log('Show reviews in the category by id');
});

reviewRoute.route('/:id').get((req,res)=>{
    console.log('Show a review');
});

reviewRoute.route('/:id/edit').get((req,res)=>{
    console.log('Show form for editing a review');
});

reviewRoute.route('/:id/edit').put((req,res)=>{
    console.log('Edit review');
});

reviewRoute.route('/:id').delete((req,res)=>{
    console.log('Delete review');
});

module.exports = reviewRoute;
