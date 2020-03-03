import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/userAction'
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
                <a href="#" onClick={this.props.logout}>Logout</a>
            </Fragment>
        )
    }
}

const LogoutConnect = connect(null, {logout})(Logout)
export default LogoutConnect

