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
        type: String
        /* default: xxx */        
    },
	userEmail : {
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
        required: true,
        default: 0
    },
	boardNum : {
        type: Number,
        required: true,
        default: 0
    }
	// userFav : Review[],
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',User);