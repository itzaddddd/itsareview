import React, { Component } from 'react';
import './UserEditForm.css';
import Navbar from '../../Bar/NavBar/NavBar';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' // redux hook function for use global props (user data)
import PropTypes from 'prop-types'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import Review from '../../Review/Review/userhisReview'
import { loadUser, editUser } from '../../../Redux/Actions/userAction';

const mapStateToProps = state => {
    return {
        user: state.user,
        review: state.review,
        error: state.error
    }
}

const EditFormSchema = yup.object().shape({
    userName: yup.string()
        // .min(8,"ชื่อผู้ใช้ต้องยาวอย่างน้อย 6 ตัวอักษร")
        .max(16,"ชื่อผู้ใช้ต้องยาวไม่เกิน 12 ตัวอักษร")
        .matches(/^[a-z0-9_-]{3,16}$/,"กรุณาใช้ตัวอักษรภาษาอังกฤษ ตัวเลข และอักขระพิเศษ _ หรือ -")
        .required("กรุณาใส่ชื่อผู้ใช้"),
    penName: yup.string()
        // ต้องแก้ให้ใส่ภาษาไทยได้
        // .min(8,"ชื่อผู้ใช้ต้องยาวอย่างน้อย 6 ตัวอักษร")
        .max(16,"ชื่อผู้ใช้ต้องยาวไม่เกิน 12 ตัวอักษร")
        .matches(/^[a-z0-9_-]{3,16}$/,"กรุณาใช้ตัวอักษรภาษาอังกฤษ ตัวเลข และอักขระพิเศษ _ หรือ -")
        .required('กรุณาใส่ชื่อสมาชิก'),
    userEmail: yup.string()
        .email('รูปแบบอีเมลไม่ถูกต้อง')
        .required('กรุณาใส่อีเมล')
})
class UserInfo extends Component{

    constructor(props){
        super(props)

        this.state = {
            msg: null
        }

    }

    static propTypes = {
        user: PropTypes.object.isRequired,
        review: PropTypes.object.isRequired,
        error: PropTypes.object.isRequired,
        loadUser: PropTypes.func.isRequired,
        editUser: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps){
        // if deleted a review, update his
        if(prevProps.review.is_deleted !== this.props.review.is_deleted && prevProps.review.is_deleted===false){
            this.props.loadUser()
        }
        // if edit error, show msg
        if(prevProps.error !== this.props.error){
            if(this.props.error.id === 'USER_EDIT_FAIL'){
                this.setState({msg: this.props.error.msg.msg})
            }else{
                this.setState({msg: null})
            }
        }
        if((prevProps.user.user !== this.props.user.user) && prevProps.user.user){
            this.props.history.push(`/user/${this.props.user.user?this.props.user.user._id:''}`)
        }
    }

    render(){
        if(this.props.user.user){
            return(
                <div>
                    <Navbar logout={true}/>
                    <Formik
                        initialValues = {{
                            userName: this.props.user.user?this.props.user.user.userName:'',
                            penName: this.props.user.user?this.props.user.user.penName:'',
                            userEmail: this.props.user.user?this.props.user.user.userEmail:'',
                        }}
                        onSubmit = {
                            values => {
                                console.log(values)
                                let {userName, penName, userEmail} = values;
                                let updateUser = {userName, penName, userEmail}
                                this.props.editUser(updateUser)
                            }
                        }
                        validationSchema = {EditFormSchema}
                    >
                        {({touched, errors, isSubmitting }) => (
                        <Form>
                            <div className="header">
                                <div className="avatar">
                                    {<img className="avatar" src={this.props.user.user?this.props.user.user.userImage:''} alt="avatar" />}
                                </div>    
                            </div>
                            
                            <div className="rowedit">
                                
                                <div className="col-sm-12 edituserinfo">แก้ไขโปรไฟล์</div>
                                {this.state.msg ? <div className="alert-box">{this.state.msg}</div> : null}
                                <div className="col-sm-12 editinfo"><i className="edit-i far fa-user fa-2x"></i>
                                    <Field 
                                        type="text" 
                                        placeholder ="username"
                                        name="userName"
                                        className={`edit-control ${touched.userName && errors.userName ? "is-invalid":""}`} 
                                    />
                                    <ErrorMessage 
                                        componet="div"
                                        name="userName"
                                        className="invalid-feedback"
                                        render={
                                            msg => <div className="error-message error-edit-message edit-control">{msg}</div>
                                        }
                                />
                                </div>
                                <div className="col-sm-12 editinfo"><i className="edit-i far fa-user fa-2x"></i>
                                    <Field 
                                        type="text" 
                                        placeholder ="pen name"
                                        name="penName"
                                        className={`edit-control ${touched.penName && errors.penName ? "is-invalid":""}`}   
                                    />
                                    <ErrorMessage 
                                        componet="div"
                                        name="penName"
                                        className="invalid-feedback"
                                        render={
                                            msg => <div className="error-message error-edit-message edit-control">{msg}</div>
                                        }
                                    />
                                </div>
                                <div className="col-sm-12 editinfo"><i className="edit-i far fa-envelope fa-2x"></i>
                                    <Field 
                                        type="text" 
                                        placeholder ="e-mail"
                                        name="userEmail"
                                        className={`edit-control ${touched.userEmail && errors.userEmail ? "is-invalid":""}`} 
                                    />
                                    <ErrorMessage 
                                        componet="div"
                                        name="userEmail"
                                        className="invalid-feedback"
                                        render={
                                            msg => <div className="error-message error-edit-message edit-control">{msg}</div>
                                        }
                                    />
                                </div>
                                <div>
                                        <a href={`/user/${this.props.user.user._id || ''}/changepass`}>แก้ไขรหัสผ่าน</a>
                                </div>
                            </div>

                            <div id="edit2">
                                <button className="save-edit">ยืนยัน</button>
                                <button className="unsave-edit" onClick={()=>this.props.history.goBack()}>ยกเลิก</button>
                            </div>
                        </Form>)}
                    </Formik>
                </div>
            )   
        }else{
            return ''
        }
    }
}

const UserInfoConnect = connect(mapStateToProps,{loadUser, editUser})(UserInfo)
export default UserInfoConnect;