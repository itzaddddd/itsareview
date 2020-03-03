const loginRouter = require('express').Router();
const passport = require('passport');
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

require('../config/passport');
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// loginRouter.post('/', function(req, res, next) {
//     passport.authenticate('local', {session: false}, 
//     function(err, user, info) {
//       if (err) {
//         return next(err);
//       }
//       if (!user) {
//         return res.json(info);
//       }
//       req.logIn(user, function(err) {
//         if (err) {
//           return next(err);
//         }
//         return res.json(req.user);
//       });
//     })(req, res, next);
//   });

loginRouter.route('/').post((req,res)=>{
    const {userName, pass1} = req.body;

    // Simple validation
    if(!userName || !pass1 ){
        return res.status(400).json({ msg: 'กรุณาใส่ข้อมูลให้ครบถ้วน'});
    }

    // Check for existing user
    User.findOne({ userName })
        .then(user => {
            if(!user) return res.status(400).json({msg: 'ไม่พบชื่อผู้ใช้ในระบบ'});

            // Validate password
            bcrypt.compare(pass1, user.password)
              .then(isMatch => {
                if(!isMatch){
                  return res.status(400).json({msg: 'ไม่สามารถเข้าสู่ระบบได้'})
                }

                jwt.sign(
                  {id: user._id},
                  config.get('jwtSecret'),
                  { expiresIn: 3600 },
                  (err, token) => {
                    if(err){
                      console.log(err);
                    }
                    res.json({
                      token,
                      user
                    });
                  }
                ) 
              });
        })
});

module.exports = loginRouter;