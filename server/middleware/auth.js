const config = require('config')
const jwt = require('jsonwebtoken')

const auth = (req,res,next) => {
    const token = req.header('x-auth-token');

    // Check for token
    if(!token) return res.status(401).json({ msg: 'กรุณาเข้าสู่ระบบ'});

    try{
        // Verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // Add user from payload
        req.user = decoded;
        next();
    }catch(e){
        return res.status(400).json({msg: 'ข้อมูลผู้ใช้ไม่ถูกต้อง'});
    }
}

module.exports = auth;