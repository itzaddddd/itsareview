import React, {Component} from 'react';

class Login extends Component{
    constructor(props){

    }

    render(){
        return(
            <div class="container">
                <h2>เข้าสู่ระบบ</h2>
                <div class="form-group">
                    <label for="usr">ID:</label>
                    <input type="text" class="form-control" id="usr" />
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" />
                </div>
                <a>ลืมรหัสผ่าน</a><br />
                <button class="btn btn-success">เข้าสู่ระบบ</button>
                <p>ยังไม่มีบัญชี?<a>สมัคร</a></p>
            </div>
        )
    }
}

export default Login;