let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Category = new Schema({
    categoryID : {
        type: String,
        required: true
    },
	categoryName : {
        type: String,
        required: true
    },
    categoryIcon : {
        type: String,
        required: true
    },
	// categoryContent : Review[],
	categoryContent_Num : {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Category',Category);