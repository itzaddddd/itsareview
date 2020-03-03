const loginRouter = require('express').Router();
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// @route   POST login
// @desc    Login 
// @access  Public
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