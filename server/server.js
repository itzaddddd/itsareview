const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const config = require('config');
const methodOverride = require('method-override')

/*set constraint*/
//const PORT = config.get('PORT');

/* import router */
const userRoute = require('./routes/userRoute');
const reviewRoute = require('./routes/reviewRoute');
const searchRoute = require('./routes/searchRoute');
const adminRoute = require('./routes/adminRoute');

/* create database connection */
require('./config/mongoose');

app.use(cors());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'))

/* use express static file */
app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

/* set route */
app.route('/').get((req,res)=>{
    res.send("It's a review");
});

app.use('/user',userRoute);
app.use('/review',reviewRoute);
app.use('/search',searchRoute);
app.use('/admin',adminRoute);

app.listen((process.env.PORT || 4000),function() {
    console.log("Server is running on Port: "+(process.env.PORT || 4000));
});
