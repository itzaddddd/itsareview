let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Commentx = new Schema({
    rvID : {
        type: String,
        required: true
    },
	commentID : {
        type: String,
        required: true
    },
	commentPost : {
        type: String,
        required: true
    },
    commentImage : {
        type: String,
    },
	commentDate : {
        type: Date,
        required: true
    },
	userID : {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Comment', Commentx);