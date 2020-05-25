let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Source = new Schema({
	sourceName : {
        type: String,
        required: true
    },
    sourceIcon : {
        type: String
    },
    sourceLink : {
        type: String
    }
});

module.exports = mongoose.model('Source',Source);