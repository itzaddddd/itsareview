let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Category = new Schema({
    categoryID : {
        type: String
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
	// categoryContent_Num : {
    //     default: 0,
    //     type: Number,
    //     required: true
    // },
});

module.exports = mongoose.model('Category',Category);