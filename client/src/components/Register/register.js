import React, {Component} from 'react';
import './register.css';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../NavBar/NavBar';
const formValid = ({formErrors, ...rest}) => {
    let valid = true;

    Object.values(formErrors).forEach(val => (val.length > 0) && (valid == false));
    return valid;

    // Object.values(rest).forEach(val => {
    //     val == null && (valid == false);
    // });
}

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const postRegister = () => {
    axios.post('http://localhost:4000/user/register',{
                userName: this.state.userName,
                userEmail: this.state.userEmail,
                pass1: this.state.pass1,
                pass2: this.state.pass2
            })
        .then(
            response => {
                console.log('res : ',response);
                this.setRedirect();
            }
        )
        .catch(
            err => {
                console.log('err : ',err);
            }
        );
            
        this.setState({
            userName: '',
            pass1: '',
            pass2: '',
            userEmail: '',
        });
}

class Register extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            userName: '',
            pass1: '',
            pass2: '',
            userEmail: '',
            formErrors: {
                userName: '',
                pass1: '',
                pass2: '',
                userEmail: ''
            }
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setRedirect = this.setRedirect.bind(this);
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        });
    }
    handleChange = e => {
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch(name){
            case 'userName':
                formErrors.userName = value.length < 5 ? "ชื่อผู้ใช้ต้องยาวกว่า 5 ตัวอักษร": "";
                break; 
            case 'pass1':
                formErrors.pass1 = value.length < 7 ? "รหัสผ่านต้องยาวกว่า 7 ตัวอักษร": "";
                break;
            case 'pass2':
                formErrors.pass2 = value.length < 7 ? "รหัสผ่านต้องยาวกว่า 7 ตัวอักษร": "";
                break;
            case 'userEmail':
                formErrors.userEmail = emailRegex.test(value) ? "": "รูปแบบผิดพลาด";
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
                Password1: ${this.state.pass1}
                Password2: ${this.state.pass2}
                Email: ${this.state.userEmail}
            `);
        }else{
            console.error('FORM INVALID - DISPLAY ERROR');
        }   
    } 

    // componentDidMount(){
    //     document.body.style.backgroundColor = "rgb(89,88,106)";
    //     document.body.style.backgroundColor = "linear-gradient(0deg, rgba(89,88,106,1) 0%, rgba(185,210,83,1) 62%)";
    // }

    render(){
        const { formErrors } = this.state;

        if(this.state.redirect){
            return <Redirect to='/login' />
        }
        return(
            <div>
            <Navbar />
            <form className="RegisterForm" onSubmit={this.onSubmit}>
                <div className="container">
                    <a href="/user"><div id="regis-title">ลงทะเบียน</div></a>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="usr" name="userName"
                            placeholder="ชื่อผู้ใช้" 
                            autoComplete="username" 
                            onChange={this.handleChange}/>
                    </div>
                    {formErrors.userName.length > 0 && (
                        <span className="errorMessage">{formErrors.userName}</span>
                    )}
                    <div className="form-group">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="pwd" name="pass1"
                            placeholder="รหัสผ่าน" 
                            autoComplete="password" 
                            onChange={this.handleChange}/>
                    </div>
                    {formErrors.pass1.length > 0 && (
                        <span className="errorMessage">{formErrors.pass1}</span>
                    )}
                    <div className="form-group">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="cpwd"
                            placeholder="ยืนยันรหัสผ่าน" 
                            name="pass2" 
                            autoComplete="password" onChange={this.handleChange} />
                    </div>
                    {formErrors.pass2.length > 0 && (
                        <span className="errorMessage">{formErrors.pass2}</span>
                    )}
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="email"
                            placeholder="อีเมล" 
                            name="userEmail" 
                            onChange={this.handleChange}/>
                    </div>
                    {formErrors.userEmail.length > 0 && (
                        <span className="errorMessage">{formErrors.userEmail}</span>
                    )}
                    <div className="button">
                        <button className="btn btn-success" id="regis-button">ลงทะเบียน</button>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}

export default Register;