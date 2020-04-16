let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Comment = new Schema({
    review_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
        required: true
    },
	commentPost : {
        type: String,
        required: true
    },
	commentDate : {
        type: Date,
        default: Date.now()
    },
	user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('Comment', Comment);