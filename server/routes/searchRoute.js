let searchRouter = require('express').Router();

searchRouter.route('/').get((req,res)=>{
    console.log('Search');
});

searchRouter.route('/').post((req,res)=>{
    console.log('Seraching');
});

searchRouter.route('/result').get((req,res)=>{
    console.log('Show results');
});

module.exports = searchRouter;