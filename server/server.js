const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const session = require('express-session');

/*set constraint*/
const PORT = require('./config/PORT').PORT;
const SECRET = require('./config/secret').secret;

/* import router */
const userRoute = require('./routes/userRoute');
const reviewRoute = require('./routes/reviewRoute');
const searchRoute = require('./routes/searchRoute');
const adminRoute = require('./routes/adminRoute');

/* passport */
const passport = require('passport');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

/* create database connection */
require('./config/mongoose');

/* import models */
const User = require('./models/Users');

/* connect mongoDB session */
const MongoDBStore = require('connect-mongodb-session')(session);
const DB = require('./config/database').url;
const store = new MongoDBStore({
    uri: DB,
    collection: 'session'
});

store.on('error',error=>{
    console.log(error)
});

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.use(session({
    secret: SECRET,
    cookie: {
        maxAge: 1000*60*60*24*7 // 1 week
    },
    store: store,
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	// res.locals.login = req.isAuthenticated();
	res.locals.user = req.user;
	res.locals.session = req.session;
	next();
});

/* create router */

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, '/../client/build')));

app.route('/').get((req,res)=>{
    res.send("Hello React");
});

// Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/../client/build/index.html'));
// });

app.use('/user',userRoute);
app.use('/review',reviewRoute);
app.use('/search',searchRoute);
app.use('/admin',adminRoute);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});