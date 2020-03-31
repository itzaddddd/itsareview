const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const config = require('config');

/*set constraint*/
const PORT = config.get('PORT');

/* import router */
const userRoute = require('./routes/userRoute');
const reviewRoute = require('./routes/reviewRoute');
const searchRoute = require('./routes/searchRoute');
const adminRoute = require('./routes/adminRoute');

/* create database connection */
require('./config/mongoose');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/* set route */
app.route('/').get((req,res)=>{
    res.send("It's a review");
});

app.use('/user',userRoute);
app.use('/review',reviewRoute);
app.use('/search',searchRoute);
app.use('/admin',adminRoute);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});