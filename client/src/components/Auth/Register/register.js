import React, {Component} from 'react';
import './register.css';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Bar/NavBar/NavBar';
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import PropTypes from 'prop-types'
import { register } from '../../../Redux/Actions/userAction'
import { clearErrors } from '../../../Redux/Actions/errorAction'
import { connect } from 'react-redux'

const RegisterSchema = yup.object().shape({
    userName: yup.string()
        .required("กรุณาใส่ชื่อผู้ใช้")
        // .min(8,"ชื่อผู้ใช้ต้องยาวอย่างน้อย 6 ตัวอักษร")
        .max(16,"ชื่อผู้ใช้ต้องยาวไม่เกิน 12 ตัวอักษร")
        .matches(/^[a-z0-9_-]{3,16}$/,"กรุณาใช้ตัวอักษรภาษาอังกฤษ ตัวเลข และอักขระพิเศษ _ หรือ -"),
    pass1: yup.string()
        // .min(8,"รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร")
        .max(16,"รหัสผ่านต้องยาวไม่เกิน 16 ตัวอักษร")
        .required("กรุณาใส่รหัสผ่าน"),
    // pass2: yup.string()
    //     // .min(8,"รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร")
    //     .max(16,"รหัสผ่านต้องยาวไม่เกิน 16 ตัวอักษร")
    //     .required("กรุณาใส่รหัสผ่าน"),
    userEmail: yup.string()
        .email('รูปแบบอีเมลไม่ถูกต้อง')
        .required('กรุุณาใส่อีเมล')
})

const mapStateToProps = state => {
    return {
        isAuthenticated: state.user.isAuthenticated,
        error: state.error
    }
}

class Register extends Component{
    state = {
        modal: false,
        msg: null,
        redirect: false
    };
    
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    toggle = () => {
        // Clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidUpdate(prevProps){
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error){
            // Check for register error
            if(error.id === 'REGISTER_FAIL'){
                this.setState({msg: error.msg.msg})
            }else{
                this.setState({msg: null})
            }
        }

        // If authenticated, close modal
        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();
            }
        }
    }
    
    render(){
        
        if(this.props.isAuthenticated){
            return <Redirect to="/" />
        }
        
        return(
            <div>
            <Navbar />
                <Formik
                    initialValues = {{
                        userName: "",
                        pass1: "",
                        // pass2: "",
                        userEmail: "" 
                    }}
                    validationSchema = {RegisterSchema}
                    onSubmit = { (values, {setSubmitting}) => {
                        const {userName, pass1, /*pass2,*/ userEmail} = values;
                        const newUser = {
                            userName,
                            pass1,
                            // pass2,
                            userEmail
                        }
                        // Attemp to register
                        this.props.register(newUser);
                        setSubmitting(false);
                        this.toggle();
                    }}
                > 
                    {({touched, errors, isSubmitting}) => (
                        
                        <Form className="RegisterForm" >
                        <div className="container">
                            <a href="/user"><div id="regis-title">สมัครสมาชิก</div></a>
                            {this.state.msg ? <div className="alert-danger">{this.state.msg}</div> : null}
                            <div className="form-group">
                                <Field 
                                    type="text" 
                                    className={`form-control ${touched.userName && errors.userName ? "is-invalid":""}`} 
                                    id="usr" name="userName"
                                    placeholder="ชื่อผู้ใช้" 
                                    autoComplete="username" 
                                />
                                <ErrorMessage 
                                    componet="div"
                                    name="userName"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="form-group">
                                <Field 
                                    type="password" 
                                    className={`form-control ${touched.pass1 && errors.pass1 ? "is-invalid":""}`} 
                                    id="pwd" name="pass1"
                                    placeholder="รหัสผ่าน" 
                                    autoComplete="password" 
                                />
                                <ErrorMessage 
                                    componet="div"
                                    name="pass1"
                                    className="invalid-feedback"
                                />
                            </div>
                            {/*<div className="form-group">
                                <Field 
                                    type="password" 
                                    className={`form-control ${touched.pass2 && errors.pass2 ? "is-invalid":""}`} 
                                    id="cpwd"
                                    placeholder="ยืนยันรหัสผ่าน" 
                                    name="pass2" 
                                    autoComplete="password"
                                />
                                <ErrorMessage 
                                    componet="div"
                                    name="pass2"
                                    className="invalid-feedback"
                                />
                            </div>*/}
                            <div className="form-group">
                                <Field 
                                    type="text" 
                                    className={`form-control ${touched.userEmail && errors.userEmail ? "is-invalid":""}`}
                                    id="email"
                                    placeholder="อีเมล" 
                                    name="userEmail" 
                                />
                                <ErrorMessage 
                                    componet="div"
                                    name="userEmail"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="button">
                                <button 
                                    className="btn btn-success" 
                                    id="regis-button"
                                    disabled={isSubmitting}
                                >
                                    สมัครสมาชิก
                                </button>
                            </div>
                        </div>
                    </Form>
                    )}
                </Formik> 
            </div>
        )
    }
}

const RegisterConnect = connect(mapStateToProps,{ register, clearErrors })(Register);
export default RegisterConnect;