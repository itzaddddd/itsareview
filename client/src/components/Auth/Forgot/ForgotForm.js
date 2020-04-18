import React, { Component } from 'react';
import './ForgotForm.css';
import Navbar from '../../Bar/NavBar/NavBar';
import { connect } from 'react-redux' // redux hook function for use global props (user data)
import PropTypes from 'prop-types'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import axios from 'axios'

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
        .required('กรุุณาใส่อีเมล')
})
class ForgotForm extends Component{

    constructor(props){
        super(props)

        this.state = {
            msg: '',
            send: false
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
                <div>
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
                            <div className="rowname">
                                <div>ลืมรหัสผ่านล่ะสิ</div>
                                <div>ไม่ต้องกังวล แค่กรอกอีเมลเพื่อตั้งรหัสผ่านใหม่</div>
                                <div>{this.state.msg.msg}</div>
                                {(this.state.send === false) && 
                                <div className="col-sm-12 user1"><i className="far fa-envelope fa-2x"></i>
                                    <Field 
                                        type="text" 
                                        name="userEmail"
                                        placeholder="ใส่อีเมลของคุณ"
                                        className={`form-control ${touched.userEmail && errors.userEmail ? "is-invalid":""}`} 
                                    />
                                    <ErrorMessage 
                                        componet="div"
                                        name="userEmail"
                                        className="invalid-feedback"
                                        render={
                                            msg => <div className="error-message">{msg}</div>
                                        }
                                    />
                                </div>}
                            </div>

                            <div id="edit">
                                {(this.state.send === false)&&<button className="button-edit">ยืนยัน</button>}
                                <button className="button-edit" onClick={()=>this.props.history.push('/login')}>ยกเลิก</button>
                            </div>
                        </Form>)}
                    </Formik>
                </div>
            )   
        
    }
}

const UserInfoConnect = connect(mapStateToProps,null)(ForgotForm)
export default UserInfoConnect;