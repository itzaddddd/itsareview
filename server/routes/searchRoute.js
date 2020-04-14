const searchRouter = require('express').Router();
const Review = require('../models/Reviews')

searchRouter.route('/').get((req,res)=>{
    Review.find({
            rvTitle:{'$regex':rvTitle,"$options":"i"},
            rvContent:{'$regex':rvContent,"$options":"i"},
    },(err,result)=>{
        if(err)console.log(err)
        console.log(result)
        res.json(result)
    })
    res.json({})
    console.log('Search');
});

module.exports = searchRouter;