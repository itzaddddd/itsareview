let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const Review = require('../models/Reviews');
const ReviewSchema = mongoose.model('Review').schema;

let User = new Schema({
	userName : {
        type: String,
        required: true
    },
	userImage : {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'        
    },
	userEmail : {
        type: String,
        require: true
    },
	userJoin : {
        type: Date,
        default: Date.now
    },
    password : {
        type: String,
        required: true
    },
	logReview : [ReviewSchema]
	// // logBoard : Board[],
	// userFav : Review[],
});

module.exports = mongoose.model('User',User);