import React, { Component } from 'react';
import './ResetPassForm.css';
import Navbar from '../../Bar/NavBar/NavBar';
import { connect } from 'react-redux' // redux hook function for use global props (user data)
import PropTypes from 'prop-types'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import queryString from 'querystring'
const mapStateToProps = state => {
    return {
        user: state.user,
        review: state.review,
        error: state.error
    }
}

const ResetFormSchema = yup.object().shape({
    pass1: yup.string()
        // .min(8,"รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร")
        .min(4,"รหัสผ่านต้องยาวอย่างน้อย 4 ตัวอักษร")
        .max(16,"รหัสผ่านต้องยาวไม่เกิน 14 ตัวอักษร")
        .matches(/^[a-z0-9_-]{3,16}$/,"กรุณาใช้ตัวอักษรภาษาอังกฤษ ตัวเลข และอักขระพิเศษ _ หรือ -")
        .required("กรุณาใส่รหัสผ่าน")
})
class ForgotForm extends Component{

    constructor(props){
        super(props)

        this.state = {
            msg: null,
            update: false,
            error: false,
            isLoading: true,
            userName: '',
            expired: false
        }

        this.updatePassword = this.updatePassword.bind(this)
    }

    static propTypes = {
        user: PropTypes.object.isRequired,
        review: PropTypes.object.isRequired,
        error: PropTypes.object.isRequired,
    }

    /* check token can use and get user from token */
    async componentDidMount(){
        console.log(this.props.match.params.token)
        await axios.get('/user/reset',{
            params: {
                resetPasswordToken: this.props.match.params.token 
            }
        })
        .then(res => {
            console.log(res)
            if(res.status === 200){
                this.setState({
                    userName: res.data.userName,
                    isLoading: false,
                    error: false,
                    update:false
                })
            }
        })
        .catch(err => {
            if(err.response.status === 410){
                console.log(err.response)
                this.setState({
                    update: false,
                    isLoading: false,
                    error: true,
                    expired:true,
                    msg: err.response.data
                }) 
            }
        })
    }
    updatePassword = pass1 => {
        axios.put('/user/reset/viaEmail?_method=PUT',{
            userName: this.state.userName,
            pass1: pass1
        })
        .then(res => {
            console.log(res.data)
            if(res.status === 200){
                this.setState({
                    update: true,
                    error:false,
                    msg: res.data
                })
            }else{
                this.setState({
                    update: false,
                    error: true,
                    msg: res.data
                })
            }
        })
        .catch(err => {
            console.log(err.response)
            if(err.response.status === 404){
                this.setState({
                    update: false,
                    error: true,
                    msg: err.response.data
                })
            }

        })
    }

    render(){
            return(
                <div>
                    {/* if token expired (this.state.expired === true), can not user link */}
                    {this.state.expired?
                    <div>
                        <div>ลิงก์นี้ไม่สามารถใช้งานได้อีกต่อไป</div>
                        <a href="/">กลับไปยัง Itsareview</a>
                    </div>
                    :
                    <Formik
                        initialValues = {{
                            pass1: ''
                        }}
                        validationSchema = {ResetFormSchema}
                        onSubmit = {
                            values => {
                                console.log(this.state.userName)
                                this.updatePassword(values.pass1)
                            }
                            
                        }
                    >
                        {({touched, errors, isSubmitting }) => (
                        <Form>
                            <div className="rowname">
                                <div>กำหนดรหัสผ่านใหม่</div>
                                {(this.state.userName !== '') && <div>ชื่อผู้ใช้ {this.state.userName}</div>}
                                {this.state.errror && (
                                    <div>{this.state.msg.msg}</div>
                                )}
                                {this.state.update && (
                                    <div>{this.state.msg.msg}</div>

                                )}
                                { (this.state.update === false) &&
                                <div className="col-sm-12 user1">
                                    <Field 
                                        type="password" 
                                        name="pass1"
                                        placeholder="ใส่รหัสผ่านใหม่"
                                        className={`form-control ${touched.pass1 && errors.pass1 ? "is-invalid":""}`} 
                                    />
                                    <ErrorMessage 
                                        componet="div"
                                        name="pass1"
                                        className="invalid-feedback"
                                        render={
                                            msg => <div className="error-message">{msg}</div>
                                        }
                                    />
                                </div>
                                }
                                {this.state.update && (
                                    <a href="/login">เข้าสู่ระบบ</a>
                                    
                                )}
                            </div>

                            <div id="edit">
                                {(this.state.update === false)&&<button className="button-edit" >ยืนยัน</button>}
                                <button className="button-edit" onClick={()=>this.props.history.push('/login')}>ยกเลิก</button>
                            </div>
                        </Form>)}
                    </Formik>
                    }
                </div>
                            
            )   
        
    }
}

const ResetPassFormConnect = connect(mapStateToProps,null)(ForgotForm)
export default ResetPassFormConnect;