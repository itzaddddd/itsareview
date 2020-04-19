const resetRoute = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/Users')

// @route   GET /user/reset
// @desc    GET user from token and check link valid
// @access  Private
resetRoute.route('/').get((req,res, next)=>{
    console.log(req.query.resetPasswordToken)
    /* find user from token */
    User.findOne({
        resetPasswordToken: req.query.resetPasswordToken,
        resetPasswordExpires: { // token will expire in limit time
            $gt: Date.now()
        }
    },(err,user)=>{
        if(err)console.log(err)
        /* if no user (token expired), link can not use */
        if(!user){
            console.log('password reset link is invalid or has expired')
            res.status(410).json({msg:'ลิงก์สำหรับแก้ไขรหัสผ่านไม่ถูกต้องหรือหมดอายุ'})
        }else{
            console.log(user)
            /* if find user, return status 200 */
            res.status(200).json({
                userName: user.userName,
                msg: 'ลิงก์สามารถใช้งานได้'
            })
        }
    })

})

// @route   PUT /user/reset/viaEmail
// @desc    Reset password via email
// @access  Private
resetRoute.route('/viaEmail').put((req,res)=>{
    /* find user from username */
    User.findOne({userName:req.body.userName},(err,user)=>{
        if(err)console.log(err)
        /* if user, reset password */
        if(user){
            console.log('user exist in db')
            /* encrypt password */
            bcrypt.hash(req.body.pass1,12,(err,hash)=>{
                if(err)console.log(err)
                /* update password in database */
                user.updateOne({
                    password: hash,
                    resetPasswordToken: null,
                    resetPasswordExpires: null
                },()=>{
                    /* if updated, return status 200 */
                    console.log('password updated')
                    res.status(200).json({msg:'แก้ไขรหัสผ่านเรียบร้อย'})
                })
            })
        }else{
            /* if no user, return status 404 */
            console.log('no user exists in db to update')
            res.status(404).json({msg:'ไม่พบชื่อผู้ใช้ในระบบ'})
        }
    })
})


module.exports = resetRoute 