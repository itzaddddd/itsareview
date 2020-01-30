const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Review = new Schema({
    rvID : {
        type: String,
        required: true
    },
	rvTitle : {
        type: String,
        required: true
    },
	rvAuthor : {
        type: String,
    },
	userID : String,
	rvTime : {
        type: Date,
        required: true,
        default: Date.now
    },
	rvType : [{
        type: String,
        required: true
    }],
	rvTag : [{
        type: String,
    }],
	rvChar : {
        type: String,
    },
	rvContent : {
		rvStory : {
            type: String,
            required: true
        },
		rvImage : [{
            type: String,
        },]
	},
	rvStatus : {
        type: Boolean,
        required: true,
        default: false
    },
	rvNovel : {
		rvSource : {
            type: String,
            required: true
        },
		rvLink : {
            type: String,
        },
	},
	reviewRate : {
        type: Number,
    },
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