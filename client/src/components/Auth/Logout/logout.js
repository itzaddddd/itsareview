import React, { Component, Fragment } from 'react'
import './logout.css'
import { connect } from 'react-redux'
import { logout } from '../../../Redux/Actions/userAction'
import PropTypes from 'prop-types'
class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    };
    render(){
        return (
            <Fragment>
                <span id="logout" onClick={()=>{this.props.logout();}}> <i className="fas fa-sign-out-alt"></i> ออกจากระบบ</span>
            </Fragment>
        )
    }
}

const LogoutConnect = connect(null, {logout})(Logout)
export default LogoutConnect

