const userRoute = require('express').Router();
const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const registerRoute = require('./registerRoute');


userRoute.route('/:id').get((req,res)=>{
    console.log('Profile');
});

userRoute.route('/:id/edit').get((req,res)=>{
    console.log('Show form for editing profile');
});

userRoute.route('/:id/edit').put((req,res)=>{
    console.log('Edit profile');
});

userRoute.use('/login',loginRoute);
userRoute.use('/logout',logoutRoute);
userRoute.use('/register',registerRoute);

module.exports = userRoute;
