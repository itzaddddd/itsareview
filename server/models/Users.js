let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let passportLocalMongoose = require('passport-local-mongoose');

let User = new Schema({
  
	userName : {
        default: "xxxxx",
        type: String
        // required: true
    },
	userImage : {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'        
    },
	userEmail : {
        default: "xxxx@gmail.com",
        type: String
    },
	userJoin : {
        type: Date,
        default: Date.now
    },
	// logReview : Review[]
	// // logBoard : Board[],
	// reviewNum : {
    //     type: Number,
    //     required: true,
    //     default: 0
    // },
	// boardNum : {
    //     type: Number,
    //     required: true,
    //     default: 0
    // }
	// userFav : Review[],
});

User.plugin(passportLocalMongoose,{
    usernameField:"userName"
});
module.exports = mongoose.model('User',User);