const registerRoute = require('express').Router();
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

registerRoute.route('/').get((req,res)=>{
    console.log('Register');
});

// @route   POST register
// @desc    Register 
// @access  Public
registerRoute.route('/').post((req,res)=>{
    const {userName, pass1, /*pass2,*/ userEmail} = req.body;

    // Simple validation
    if(!userName || !pass1 /*|| !pass2*/ || !userEmail){
        return res.status(400).json({ msg: 'กรุณาใส่ข้อมูลให้ครบถ้วน'});
    }

    // Check for existing user
    User.findOne({ userName })
        .then(user => {
            if(user) return res.status(400).json({msg: 'ชื่อผู้ใช้นี้ถูกใช้งานแล้ว'});
            User.findOne({ userEmail })
                .then(user => {
                    if(user) return res.status(400).json({msg: 'อีเมลนี้ถูกใช้งานแล้ว'})

                    const newUser = new User({
                        userName: userName,
                        penName: userName,
                        userEmail: userEmail,
                        password: pass1
                    })
        
                    // Create salt and hash
                    bcrypt.genSalt(10, (err,salt)=>{
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err){
                                console.log(err);
                            }
                            newUser.password = hash;
                            newUser.save()
                                .then(user => {
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
                                })
                        })
                    });
                })
        })
});

module.exports = registerRoute;