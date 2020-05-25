const searchRouter = require('express').Router();
const Review = require('../models/Reviews')

// @route   GET /search/review
// @desc    Search a review 
// @access  Public
searchRouter.route('/review').get((req,res)=>{
    let query = {}
    for(let propName in req.query){
        if(typeof req.query[propName] !== 'undefined'){
            if(Array.isArray(req.query[propName])){
                query[propName] = {$in:req.query[propName]}
            }else{
                query[propName] = {$regex:req.query[propName]}
            }
            
        }
    }
    if(Object.keys(query).length !== 0){
        Review.find(query,(err,result)=>{
            if(err)console.log(err)
            console.log(result)
            res.json(result)
        })
    }else{
        res.end()
    }
    console.log('Search review');
});

module.exports = searchRouter;