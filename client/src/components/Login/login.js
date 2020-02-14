import React, {Component} from 'react';
import axios from 'axios';
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            pass1: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername = e => {
        this.setState({
            userName: e.target.value
        });
    }

    onChangePassword = e => {
        this.setState({
            pass1: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        let data = {
            userName: this.state.userName,
            pass1: this.state.pass1
        }

        axios.post('http://localhost:4000/user/login',data)
        .then(
            response => {
                console.log(response);
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )

        this.setState({
            userName: '',
            pass1: ''
        });
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="container">
                    <h2>เข้าสู่ระบบ</h2>
                    <div className="form-group">
                        <label htmlFor="usr">ชื่อผู้ใช้</label>
                        <input type="text" className="form-control" id="usr" name="userName" 
                        autoComplete="username" onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">รหัสผ่าน</label>
                        <input type="password" className="form-control" id="pwd" name="pass1" 
                        autoComplete="current-password" onChange={this.onChangePassword} />
                    </div>
                    <button className="btn btn-success" onSubmit={this.onSubmit}>เข้าสู่ระบบ</button>
                    <p>ยังไม่มีบัญชี? <a href="/register">สมัคร</a></p>
                </div>
            </form>
        )
    }
}

export default Login;