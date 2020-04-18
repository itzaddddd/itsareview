const forgotRoute = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('config')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const User = require('../models/Users')

// @route   POST /user/forgot
// @desc    Send an email for setting password
// @access  Public
forgotRoute.post('/',(req,res)=>{
    /* set email var from body */
    let userEmail = req.body.userEmail
    /* if email empty, return status 400 */
    if(req.body.userEmail === ''){
        res.status(400).json({msg:'กรุณาใส่อีเมล'})
    }
    /*find user by email*/
    User.findOne({userEmail:userEmail},async (err,user)=>{
        if(err)console.log(err)
        /* if no user, return status 403 */
        if(!user)res.status(403).json({msg:'อีเมลนี้ไม่มีอยู่ในระบบ'})
        else{
            /* create token */
            const token = crypto.randomBytes(20).toString('hex');
            console.log('user ',user)
            /* update token to user data */
            await User.update({userEmail:userEmail},{ $set:{
                    resetPasswordToken: token,
                    resetPasswordExpires: Date.now()+360000
                }}
            )
            .catch(err=>console.log(err))
            console.log('user 2',user)
            /* create email transpoter */
            const transporter = nodemailer.createTransport({
                service: 'gmail', 
                auth: {
                    user: config.email.user,
                    pass: config.email.pass
                }    
            })
            /* create reset password email */
            const mailOptions = {
                from: 'isarafff@gmail.com',
                to: `${userEmail}`,
                subject: 'Itsareview - ลิงก์สำหรับเปลี่ยนรหัสผ่าน',
                text: 'กรุณาเปลี่ยนรหัสภายใน 1 ชั่วโมง ที่ '+`http://localhost:3000/reset/${token}` 
            }
            console.log('sending email...')
            let valid = true;
            /* send email */
            transporter.sendMail(mailOptions, (err,res)=>{
                if(err){
                    valid=false
                    console.log('somethig went wrong ',err)
                };
                console.log('here is the res ',res)
            })
            /* check if send, return status 200*/
            if(valid){
                return res.status(200).json({msg:'ส่งลิงก์สำหรับเปลี่ยนรหัสผ่านเรียบร้อย กรุณาตรวจสอบอีเมลของคุณ'});
            }else{
                return res.status(500).json({msg:'เกิดข้อผิดพลาด'});
            }
        }
    })
})



module.exports = forgotRoute
