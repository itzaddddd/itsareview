const config = require('config')
const DB = config.get('url');
const mongoose = require('mongoose');

mongoose.connect(DB, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true 
});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully");
});