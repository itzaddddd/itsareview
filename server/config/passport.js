const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('../models/Users');

passport.use(new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'pass1'
  },User.authenticate()));