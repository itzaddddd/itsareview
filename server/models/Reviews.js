const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('../models/Users');
// const UserSchema = mongoose.model('User').schema;

let Review = new Schema({
	rvTitle : {
        type: String,
        required: true
    },
	// rvAuthor : {
    //     type: String,
    // },
	user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        type: String,
        default: null
    },
	rvTime : {
        type: Date,
        default: Date.now(),
        required: true,
        
    },
	rvType : {
        type: [String],
        required: true
    },
	rvTag : {
        type: [String],
    },
	rvChar : {
        type: String,
    },
	// rvContent : {
		rvContent : {
            type: String,
            required: true
        },
		rvImage : {
            type: String,
            default: "xxx"
        },
	// },
	rvStatus : {
        type: Boolean,
        required: true,
        default: false
    },
	//rvNovel : {
		rvSource : {
            type: String,
            required: true
        },
	// 	rvLink : {
    //         type: String,
    //     },
	// },
	// reviewRate : {
    //     type: Number,
    // },
	rvView_Num : {
        type: Number,
        required: true,
        default: 0
    },
	// rvComment : {
	// 	rvComment_Num : {
    //         type: Number,
    //         required: true
    //     },
	// 	rvComment_Post : Comment[]
	// },
	// rvFav_Num : {
    //     type: Number,
    //     required: true
    // },
});
 
module.exports = mongoose.model('Review',Review);