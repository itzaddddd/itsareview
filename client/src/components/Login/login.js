import React, {Component} from 'react';
// import './login.css'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {GetUser} from '../../Redux/Actions';

const formValid = (formErrors) => {
    return Object.values(formErrors).length == 0;
}

const postLogin = (username, password) => {
    let data = {
        userName: username,
        pass1: password
        
    }
    axios.post('http://localhost:4000/user/login',data)
        .then(
            response => {
                console.log(response.data);
                this.setRedirect();
                return response.data;
            }
        )
        .catch(
            error => {
                console.log(error);
                return error;
            }
        )

        this.setState({
            userName: '',
            pass1: ''
        });
}

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            pass1: '',
            user: '',
            redirect: false,
            formErrors: {
                userName:'',
                pass1:''
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.setRedirect = this.setRedirect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        });
    }

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch(name){
            case 'userName':
                formErrors.userName = value.length < 5 ? "ชื่อผู้ใช้ต้องยาวกว่า 5 ตัวอักษร": "";
                break; 
            case 'pass1':
                formErrors.pass1 = value.length < 7 ? "รหัสผ่านต้องยาวกว่า 7 ตัวอักษร": "";
                break; 
            default:
                break;
        }

        this.setState({formErrors, [name]:value},
                () => console.log(this.state)
            );
        
    }

    onSubmit = e => {
        e.preventDefault();

        if(formValid(this.state.formErrors)){
            console.log(`
                ---SUBMITTING---
                Username: ${this.state.userName}
                Password: ${this.state.pass1}
            `);
        }else{
            console.error('FORM INVALID - DISPLAY ERROR');
        }   
        // console.log(formValid(this.state.formErrors));
    }

    render(){
        const { formErrors } = this.state;

        if(this.state.redirect){
            return <Redirect to='/user' />
        }
        return(
            <div className="login">
                <form onSubmit={this.onSubmit}>
                    <div className="container">
                        <h2>เข้าสู่ระบบ</h2>
                        <div className="form-group">
                            <label htmlFor="usr">ชื่อผู้ใช้</label>
                            <input type="text" className="form-control" id="usr" name="userName" 
                            autoComplete="username" onChange={this.handleChange} />
                        </div>
                        {formErrors.userName.length > 0 && (
                            <span className="errorMessage">{formErrors.userName}</span>
                        )}
                        <div className="form-group">
                            <label htmlFor="pwd">รหัสผ่าน</label>
                            <input type="password" className="form-control" id="pwd" name="pass1" 
                            autoComplete="current-password" onChange={this.handleChange} />
                        </div>
                        {formErrors.pass1.length > 0 && (
                            <span className="errorMessage">{formErrors.pass1}</span>
                        )}
                        <div className="button">
                            <button className="btn btn-success" onSubmit={this.onSubmit}>เข้าสู่ระบบ</button>
                        </div>
                        <p>ยังไม่มีบัญชี? <a href="/register">สมัคร</a></p>
                    </div>
                </form>
            </div>
            
        )
    }
}

export default Login;