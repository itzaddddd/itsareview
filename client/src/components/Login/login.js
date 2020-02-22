import React, {Component} from 'react'              // react and component
import {Redirect} from 'react-router-dom'           // redirect
import './login.css'                                // css file
import axios from 'axios'                           // send and get data with back-end
import Navbar from '../NavBar/NavBar'               // Navbar component
import {useSelector, useDispatch} from 'react-redux'// redux hook function for use global state (user data)
import {GetUser} from '../../Redux/Actions'         // redux action
import { Formik, Form, Field, ErrorMessage } from 'formik'        // lib for creating form
import * as yup from 'yup'                          // lib for validation

const LoginSchema = yup.object().shape({
    userName: yup.string()
        .required("กรุณาใส่ชื่อผู้ใช้")
        .matches(/^[a-z0-9_-]{3,16}$/,"กรุณาใช้ตัวอักษรภาษาอังกฤษ ตัวเลข และอักขระพิเศษ _ หรือ -"),
    pass1: yup.string()
        // .min(8,"รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร")
        .max(16,"รหัสผ่านต้องยาวไม่เกิน 16 ตัวอักษร")
        .required("กรุณาใส่รหัสผ่าน")
})

const postLogin = (username, password) => {
    let data = {
        userName: username,
        pass1: password
        
    }
    console.log(data)
    axios.post('http://localhost:4000/user/login',data)
        .then(
            response => {
                console.log(response.data);
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )
    }

class Login extends Component{
    constructor(props){
        super(props);  
    }
    render(){
        return(
            <div>
                <Navbar />
                    {/*<div id="logo-black">
                        <img src="https://sv1.picz.in.th/images/2020/02/18/xUSig2.png" alt="logo" width="70%" height="auto" />
                    </div>  */}  
                <Formik
                    initialValues = {{ userName: "", pass1: "" }}
                    validationSchema = {LoginSchema}
                    onSubmit = { (values,{setSubmitting}) => {
                        postLogin(values.userName, values.pass1);
                        setSubmitting(false);
                    }}
                >
                    {({ touched, errors, isSubmitting}) => (
                    <Form className="LoginForm">
                        <div className="container">
                            <a href="/user"><div id="login-title">เข้าสู่ระบบ</div></a>
                            <div className="form-group login">
                                <Field 
                                    type="text" 
                                    className={`form-control ${touched.email && errors.email ? "is-invalid":""}`} 
                                    placeholder="ชื่อผู้ใช้" 
                                    name="userName"  
                                />
                                <ErrorMessage 
                                    componet="div"
                                    name="userName"
                                    className="invalid-feedback"
                                />
                            </div>
                            
                            <div className="form-group login">
                                <Field
                                    type="password" 
                                    className="form-control" 
                                    id="pwd"
                                    placeholder="รหัสผ่าน" 
                                    name="pass1" 
                                />
                                <ErrorMessage 
                                    componet="div"
                                    name="pass1"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="button">
                                <button 
                                    className="btn btn-success" 
                                    id="login-button" 
                                    onSubmit={this.onSubmit}
                                    disabled={isSubmitting}
                                >
                                เข้าสู่ระบบ
                                </button>
                            </div>
                            <div id="account-regis">
                                <span id="account">ยังไม่มีบัญชี?</span><a href="/register" id="link-regis">สมัคร</a>
                            </div>
                        </div>
                    </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default Login;