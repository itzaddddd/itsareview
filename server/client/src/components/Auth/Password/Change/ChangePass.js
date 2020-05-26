import React, { Component } from 'react';
import './ChangePass.css';
import Navbar from '../../../Bar/NavBar/NavBar';
import { connect } from 'react-redux' // redux hook function for use global props (user data)
import PropTypes from 'prop-types'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import {Modal} from 'react-bootstrap'

const mapStateToProps = state => {
    return {
        user: state.user,
        review: state.review,
        error: state.error
    }
}

const ChangePasswordSchema = yup.object().shape({
    password: yup.string()
        // .min(8,"รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร")
        .min(4,"รหัสผ่านต้องยาวอย่างน้อย 4 ตัวอักษร")
        .max(16,"รหัสผ่านต้องยาวไม่เกิน 14 ตัวอักษร")
        .matches(/^[a-z0-9_-]{3,16}$/,"กรุณาใช้ตัวอักษรภาษาอังกฤษ ตัวเลข และอักขระพิเศษ _ หรือ -")
        .required("กรุณาใส่รหัสผ่าน"),
    newpassword: yup.string()
        // .min(8,"รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร")
        .min(4,"รหัสผ่านต้องยาวอย่างน้อย 4 ตัวอักษร")
        .max(16,"รหัสผ่านต้องยาวไม่เกิน 14 ตัวอักษร")
        .matches(/^[a-z0-9_-]{3,16}$/,"กรุณาใช้ตัวอักษรภาษาอังกฤษ ตัวเลข และอักขระพิเศษ _ หรือ -")
        .required("กรุณาใส่รหัสผ่าน")
})
class ChangePassword extends Component{

    constructor(props){
        super(props)

        this.state = {
            msg: '',
            updated: false,
            PopUpChangePass : true, 
            show : true
        }
        this.changePassword = this.changePassword.bind(this)

    }

    changePassword = (password, newpassword) => {
        console.log('change password')
        axios.put(`/user/${this.props.user_id}/changepass?_method=PUT`,{
            password: password,
            newpassword: newpassword    
        })
        .then(res=>{
            if(res.status===200){
                this.setState({
                    msg:res.data,
                    updated:true
                })
            }
            console.log(res.data)
        })
        .catch(err=>{
            if(err.response.status===400){
                this.setState({msg:err.response.data})
            }
            console.log(err.response.data)
        })
    }

    static propTypes = {
        user: PropTypes.object.isRequired,
        review: PropTypes.object.isRequired,
        error: PropTypes.object.isRequired,
    }

    render(){
            return(
                <Modal animation={false}
                {...this.props}
                size="md"
                centered >
                    
                    <Formik
                        initialValues = {{
                            password: '',
                            newpassword: ''
                        }}
                        onSubmit = {
                            values => {
                                console.log(this.props)
                                console.log(values)
                                this.changePassword(values.password,values.newpassword)
                            }
                        }
                        validationSchema = {ChangePasswordSchema}
                    >
                        {({touched, errors, isSubmitting }) => (
                        <Form action="/changpass" method="post">
                            <Modal.Header id="modal-header-edit-pass" closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                <p className="popUpTopic"><i className='fas fa-key' />  แก้ไขรหัสผ่าน</p>
                                </Modal.Title>
                            </Modal.Header>
                            {this.state.msg.msg==="รหัสผ่านไม่ถูกต้อง"?<div className="error-message-edit-pass fail">{this.state.msg.msg}</div>
                            :<div className="error-message-edit-pass">{this.state.msg.msg}</div>}

                            <div className="inbox-edit-pass">
                                {(this.state.updated===false)&&
                                <div className="col-sm-12">
                                    <Field 
                                        type="password" 
                                        name="password"
                                        placeholder="ใส่รหัสผ่านเดิม"
                                        className={`edit-form-control ${touched.password && errors.password ? "is-invalid":""}`} 
                                    />
                                    <ErrorMessage 
                                        componet="div"
                                        name="password"
                                        className="invalid-feedback"
                                        render={
                                            msg => <div className="error-message">{msg}</div>
                                        }
                                    />
                                </div>}
                                {(this.state.updated===false)&&
                                <div className="col-sm-12">
                                    <Field 
                                        type="password" 
                                        name="newpassword"
                                        placeholder="ใส่รหัสผ่านใหม่"
                                        className={`edit-form-control ${touched.newpassword && errors.newpassword ? "is-invalid":""}`} 
                                    />
                                    <ErrorMessage 
                                        componet="div"
                                        name="newpassword"
                                        className="invalid-feedback"
                                        render={
                                            msg => <div className="error-message">{msg}</div>
                                        }
                                    />
                                </div>} 
                            </div>
                                   
                            <div id="edit-pass">
                                {(this.state.updated===false)&&
                                    <button className="button-edit" type="submit">ยืนยัน</button>
                                }
                            </div>
                        </Form>)}
                    </Formik>
                </Modal>
            )   
        
    }
}

const ChangepassConnect = connect(mapStateToProps,null)(ChangePassword)
export default ChangepassConnect;