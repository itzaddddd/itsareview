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
                {/*<div className="nav-link" onClick={this.props.logout} href="#">
                    Logout
                </div>*/}
                <a href="#" id="logout" onClick={this.props.logout}>  ออกจากระบบ</a>
            </Fragment>
        )
    }
}

const LogoutConnect = connect(null, {logout})(Logout)
export default LogoutConnect

