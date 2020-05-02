const adminRoute = require('express').Router();
const Review = require('../models/Reviews');
const Category = require('../models/Categories');
const User = require('../models/Users');
const Source = require('../models/Sources')


// *****************************user***************************************

adminRoute.route('/users').get((req,res)=>{
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
  console.log('Show User from Database');
});

adminRoute.route('/users/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// *****************************review***************************************

adminRoute.route('/reviews').get((req,res)=>{
  Review.find()
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json('Error: ' + err));
  console.log('Show Review from Database');
});

adminRoute.route('/reviews/:id').delete((req, res) => {
  Review.findByIdAndDelete(req.params.id)
    .then(() => res.json('Review deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// ***************************category***************************************

adminRoute.route('/categories').get((req,res)=>{
  Category.find()
    .then(categories => {res.json(categories)})
    .catch(err => res.status(400).json('Error: ' + err));
  console.log('Show Category from Database');
  
});

adminRoute.route('/categories/add').post((req, res) => {

    // const categoryID = req.body.categoryIcon;
  const categoryName = req.body.categoryName;
  const categoryIcon = req.body.categoryIcon;

  const newCategory = new Category({
      categoryName,
      categoryIcon
  });

  newCategory.save()
    .then(() => res.json('Category added!'))
    .catch(err => res.status(400).json('Error: ' + err));

  console.log(newCategory, 'Add Category to Database');
});

adminRoute.route('/categories/update/:id').post((req, res) => {
  Category.findById(req.params.id)
    .then(categories => {
      categories.categoryName = req.body.categoryName;
      categories.categoryIcon = req.body.categoryIcon;

      categories.save()
        .then(() => res.json('Category updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

adminRoute.route('/categories/:id').delete((req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then(() => res.json('Category deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));

  console.log('Deleted Category from Database');
});


// adminRoute.get('/admin/category', function(req, res, next) {
//     var resultArray = [];
//     MongoClient.connect(url, function(err, client){
//     assert.equal(null, err);
//     const db = client.db(dbName);
//     var cursor = db.collection('categories').find();
//     cursor.forEach(function(doc, err) {
//         assert.equal(null, err);
//         resultArray.push(doc);
//     }, function(){
//       client.close();
//       res.render('/admin/category', {items: resultArray});
//     });
//     });
//   });


// ***************************source***************************************
adminRoute.route('/source').get((req,res)=>{
  Source.find({},(err,source)=>{
      if(err)console.log(err)
      res.json(source)
      console.log('Get source')
  })
})

adminRoute.route('/source').post((req,res)=>{
  let {sourceName, sourceLink} = req.body
  let newSource = new Source({
      sourceName: sourceName,
      sourceLink: sourceLink
  })
  newSource.save((err,source)=>{
      if(err)console.log(err)
      res.json(source)
  })
  console.log('Add source')
})

module.exports = adminRoute;
