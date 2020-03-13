import React, { Component, Fragment } from 'react';
import './NavBar.css';

import Logout from '../../Auth/Logout/logout';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class NavBar extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired
    }

    render(){
        const {isAuthenticated, user} = this.props.user;

        const memberLinks = (
            <Fragment>
                <span>
                    <a href="/user"><strong>{ user ? user.userName : ''}</strong></a>
                </span>
                <Logout />
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <a href="/login">เข้าสู่ระบบ</a>
                <a href="/register">สมัครสมาชิก</a>
            </Fragment>
        );

        return (
            <div>
                <div className="navHeader">
                    <a href="/"><img className ="photo" src="https://sv1.picz.in.th/images/2020/02/14/xK1HvZ.png" alt="xK1HvZ.png" border="0" width="auto" height="32" /></a>
                    {/*<a href="/"><div id= "search"><p><i  className="fas fa-search" id="search"/></p></div></a>*/}
                    {/*<a href="/login"><div id= "search"><p><i className="fas fa-user" id="search"/></p></div></a>*/}
                    { isAuthenticated ? memberLinks : guestLinks }
                </div>
            </div>   
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const NavbarConnect = connect(mapStateToProps,null)(NavBar)
export default NavbarConnect;
