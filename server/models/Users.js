let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let passportLocalMongoose = require('passport-local-mongoose');

let User = new Schema({
    userID : {
        type: String,
        required: true
    },
	userName : {
        type: String,
        required: true
    },
	// userLevel : Number,
	userImage : {
        type: String,
    },
	userEMail : {
        type: String,
        required: true
    },
	userPassword : {
        type: String,
        required: true
    },
	userJoin : {
        type: Date,
        default: Date.now
    },
	// logReview : Review[],
	// logBoard : Board[],
	reviewNum : {
        type: Number,
        required: true
    },
	boardNum : {
        type: Number,
        required: true
    },
	// userFav : Review[],
	userRate : {
        type: Number,
        required: true
    },
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',User);