const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
/* connect mongoDB database */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Itsareview', { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true 
});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully");
});
/* import model */
const User = require('./models/Users');

/* import router */
const userRoute = require('./routes/userRoute');
const reviewRoute = require('./routes/reviewRoute');
const searchRoute = require('./routes/searchRoute');

/* passport */
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

/* - */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(require('express-session')({
    secret: 'itsareview',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(flash());
app.use(passport.session());

passport.use(new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'pass1'
},(username, password, done) => {
    console.log('username : '+username);
    User.findOne({
        userName: username
    }, (error, user) => {
        if (error) {
            return done(error);
        }
        if (!user) {
            return done(null, false, {
                message: 'Username or password incorrect'
            });
        }


        // Do other validation/check if any

        return done(null, user);
    });
})
);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
/* create router */
app.use('/user',userRoute);
app.use('/review',reviewRoute);
app.use('/search',searchRoute);

app.get('/',(req,res)=>{
    res.send("Hello React");
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});