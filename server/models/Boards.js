let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Board = new Schema({
    boardID : {
        type: String,
        required: true
    },
	boardName : {
        type: String,
        required: true
    },
	userID : {
        type: String,
        required: true
    },
	boardTime : {
        type: Date,
        required: true
    },
	boardType : {
        type: String,
        required: true
    },
	// boardContent : {
	// 	boardStory : String,
	// 	boardImage : String[]
	// }, 
	boardView_Num :{
        type: String,
        required: true
    }
	// boardComment : {
	// 	boardComment_Num : Number,
	// 	boardComment_Post : Comment[]
	// }
});

module.exports = mongoose.model('Board',Board);