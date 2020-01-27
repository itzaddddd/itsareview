let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Tag = new Schema({
    tagID : {
        type: String,
        required: true
    },
	tagName : {
        type: String,
        required: true
    },
	// tagContent : Review[],
	tagContent_Num : {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Tag',Tag);