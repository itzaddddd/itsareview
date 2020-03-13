let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Category = new Schema({
    // categoryID : {
    //     type: String,
    //     required: true
    // },
	categoryName : {
        type: String,
        required: true
    },
    categoryIcon : {
        type: String,
        required: true,
        default: 'https://www.img.in.th/images/378d78b9067ad384f2ca53f7c4601058.gif'
    }
	// categoryContent : Review[],
	// categoryContent_Num : {
    //     type: Number,
    //     required: true
    // },
});

module.exports = mongoose.model('Category',Category);