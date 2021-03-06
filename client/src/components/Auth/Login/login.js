import React, { Component, Fragment } from 'react'; // react and component
import { Redirect } from 'react-router-dom'; // redirect
import './login.css'; // css file
import Navbar from '../../Bar/NavBar/NavBar'; // Navbar component
import { connect } from 'react-redux'; // redux hook function for use global state (user data)
import { Formik, Form, Field, ErrorMessage } from 'formik'; // lib for creating form
import * as yup from 'yup'; // lib for validation
import PropTypes from 'prop-types'; // prop type
import { login } from '../../../Redux/Actions/userAction'; // login action (like a function)
import { clearErrors } from '../../../Redux/Actions/errorAction'; // clear error action
import PopUpForgotPass from '../../Auth/Password/Forgot/ForgotForm'; //popup forgot password
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* define form validaqtion */
const LoginSchema = yup.object().shape({
    userName: yup
        .string()
        .required('กรุณาใส่ชื่อผู้ใช้')
        // .min(8,"ชื่อผู้ใช้ต้องยาวอย่างน้อย 6 ตัวอักษร")
        .max(16, 'ชื่อผู้ใช้ต้องยาวไม่เกิน 12 ตัวอักษร')
        .matches(
            /^[a-z0-9_-]{3,16}$/,
            'กรุณาใช้ตัวอักษรภาษาอังกฤษ ตัวเลข และอักขระพิเศษ _ หรือ -'
        ),
    pass1: yup
        .string()
        // .min(8,"รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร")
        .max(16, 'รหัสผ่านต้องยาวไม่เกิน 14 ตัวอักษร')
        .matches(
            /^[a-z0-9_-]{3,16}$/,
            'กรุณาใช้ตัวอักษรภาษาอังกฤษ ตัวเลข และอักขระพิเศษ _ หรือ -'
        )
        .required('กรุณาใส่รหัสผ่าน')
});

/* get global state from redux store */
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
        error: state.error
    };
};

class Login extends Component {
    state = {
        msg: null, // error message
        PopUpForgotPass: false, //set pop-up close
        show: false
    };

    /* set prop types */

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    /* toggle modal (not use) */
    toggle = () => {
        // Clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    };

    // check form error update
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            // Check for login error
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }

        // If authenticated, close modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    }

    render() {
        // import close popup function
        let PopUpClose = () => this.setState({ PopUpForgotPass: false });

        // if login successed, redirect
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                <Navbar />
                {/* logo image */}
                {/*<div id="logo-black">
                        <img src="https://sv1.picz.in.th/images/2020/02/18/xUSig2.png" alt="logo" width="70%" height="auto" />
                    </div>  */}

                {/* form (use formik lib)*/}
                <Formik
                    /* initial values (use name of input) */
                    initialValues={{
                        userName: '',
                        pass1: ''
                    }}
                    /* set validation form */
                    validationSchema={LoginSchema}
                    /*set onSubmit function*/
                    onSubmit={(values, { setSubmitting }) => {
                        const { userName, pass1 } = values;
                        const user = {
                            userName,
                            pass1
                        };
                        // Attemp to register
                        this.props.login(user);
                        setSubmitting(false);
                        this.toggle();
                    }}
                >
                    {({ touched, errors, isSubmitting }) => (
                        <div style={{ paddingTop: '10%' }}>
                            <Container>
                                <Row>
                                    <Col
                                        lg={6}
                                        sm={12}
                                        xs={12}
                                        className="bg-login"
                                    ></Col>
                                    <Col lg={6} sm={12} xs={12}>
                                        <Form
                                            className="LoginForm"
                                            id="login-form"
                                        >
                                            <div id="login-title">
                                                เข้าสู่ระบบ
                                            </div>
                                            {this.state.msg ? (
                                                <div className="alert-box">
                                                    {this.state.msg}
                                                </div>
                                            ) : null}
                                            <div className="form-group login">
                                                <Field
                                                    type="text"
                                                    className={`form-control ${
                                                        touched.userName &&
                                                        errors.userName
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`}
                                                    placeholder="ชื่อผู้ใช้"
                                                    name="userName"
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="userName"
                                                    className="invalid-feedback"
                                                    render={(msg) => (
                                                        <div className="error-message">
                                                            {msg}
                                                        </div>
                                                    )}
                                                />
                                            </div>

                                            <div className="form-group login">
                                                <Field
                                                    type="password"
                                                    className={`form-control ${
                                                        touched.pass1 &&
                                                        errors.pass1
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`}
                                                    id="pwd"
                                                    placeholder="รหัสผ่าน"
                                                    name="pass1"
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="pass1"
                                                    className="invalid-feedback"
                                                    render={(msg) => (
                                                        <div className="error-message">
                                                            {msg}
                                                        </div>
                                                    )}
                                                />
                                            </div>
                                            <div className="button">
                                                <button
                                                    className="btn btn-success"
                                                    id="login-button"
                                                    disabled={isSubmitting}
                                                >
                                                    เข้าสู่ระบบ
                                                </button>
                                            </div>
                                            <div id="account-regis">
                                                <span id="account">
                                                    ยังไม่มีบัญชี?
                                                </span>
                                                <a
                                                    href="/register"
                                                    id="link-regis"
                                                >
                                                    สมัคร
                                                </a>
                                            </div>
                                            <div id="account-regis">
                                                <a
                                                    className="account-forgot"
                                                    onClick={() =>
                                                        this.setState({
                                                            PopUpForgotPass: true
                                                        })
                                                    }
                                                >
                                                    <span id="account-forgot">
                                                        ลืมรหัสผ่าน
                                                    </span>
                                                </a>
                                                <PopUpForgotPass
                                                    show={
                                                        this.state
                                                            .PopUpForgotPass
                                                    }
                                                    onHide={PopUpClose}
                                                />
                                            </div>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )}
                </Formik>
            </div>
        );
    }
}

const LoginConnect = connect(mapStateToProps, { login, clearErrors })(Login);
export default LoginConnect;
