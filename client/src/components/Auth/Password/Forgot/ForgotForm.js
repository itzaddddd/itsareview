import React, { Component } from 'react';
import './ForgotForm.css';
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

const ForgotFormSchema = yup.object().shape({
    userEmail: yup.string()
        .email('รูปแบบอีเมลไม่ถูกต้อง')
        .required('กรุณาใส่อีเมล')
})
class ForgotForm extends Component{

    constructor(props){
        super(props)

        this.state = {
            msg: '',
            send: false,
            PopUpForgotPass : true, 
            show : true
        }
        this.sendEmail = this.sendEmail.bind(this)

    }

    sendEmail = userEmail => {
        axios.post('/user/forgot',{userEmail:userEmail})
            .then(res => {
                console.log(res.data)
                if(res.status === 200){
                    this.setState({
                        msg: res.data,
                        send: true
                    })
                }
            })
            .catch(err => {
                console.log(err.response)
                if(err.response.status === 403){
                    this.setState({
                        msg:err.response.data
                    })
                }
                if(err.response.status === 400){
                    this.setState({
                        msg:err.response.data
                    })
                }
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
                size="sm"
                centered >
                    {/*<Navbar logout={true}/>*/}
                    <Formik
                        initialValues = {{
                            userEmail: ''
                        }}
                        onSubmit = {
                            values => {
                                console.log(values)
                                this.sendEmail(values.userEmail)
                            }
                        }
                        validationSchema = {ForgotFormSchema}
                    >
                        {({touched, errors, isSubmitting }) => (
                        <Form>
                            <Modal.Header id="modal-header-forgot-pass" closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                <p className="popUpTopic">รีเซ็ตรหัสผ่าน</p>
                                </Modal.Title>
                            </Modal.Header>
                            <div className="topic-message-forgot-pass">
                                <div className="topic-forgot-pass"><i className="fa fa-lock fa-4x"/><br/>ลืมรหัสผ่านใช่ไหม<br/>กรอกอีเมลเพื่อตั้งรหัสผ่านใหม่</div>

                                {/* {this.state.msg.msg==="อีเมลนี้ไม่มีอยู่ในระบบ"?<div className="error-message-edit-pass fail">{this.state.msg.msg}</div>
                            :<div className="error-message-edit-pass">{this.state.msg.msg}</div>} */}
                                <div>{this.state.msg.msg}</div>
                                {(this.state.send === false) && 
                                <div className="col-sm-12 user1-forgot-pass">
                                    {/* <i className="far fa-envelope fa-2x envelope-forgot-pass"/> */}
                                    <Field 
                                        type="text" 
                                        name="userEmail"
                                        placeholder="ใส่อีเมลของคุณ"
                                        className={`forgot-form-control ${touched.userEmail && errors.userEmail ? "is-invalid":""}`} 
                                    />
                                    <ErrorMessage 
                                        componet="div"
                                        name="userEmail"
                                        className="invalid-feedback"
                                        render={
                                            msg => <div className="error-message error-forgot-pass">{msg}</div>
                                        }
                                    />
                                </div>}
                            </div>
                            

                            <div id="edit-pass">
                                {(this.state.send === false)&&<button className="button-edit" type="submit">ยืนยัน</button>}
                                {/* <button type="button" className="button-edit" onClick={this.state.show===false}>ยกเลิก</button> */}
                            </div>

                            
                        </Form>)}
                    </Formik>
                </Modal>
            )   
        
    }
}

const UserInfoConnect = connect(mapStateToProps,null)(ForgotForm)
export default UserInfoConnect;