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
        const { user } = this.props.user; /*error with isAuthenticated (get html code instead of user data)*/
        let Link
        const memberLinks = (
            <Fragment>
                <span>
                    <a href={`/user/${user ? user._id:null}`} id="username"><strong>{ user ? user.userName : ''}</strong></a>
                </span>
                <Logout />
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <a href="/login" id="login"><i className="fas fa-user"><text> เข้าสู่ระบบ</text></i></a>
            </Fragment>
        );

        if(user || this.props.user.isLoading){
            Link = memberLinks
        }

        else{
            Link = guestLinks
        }

        return (
            <div>
                <nav class="navbar navbar-default navbar-fixed-top">
                <div className="navHeader">
                    <a href="/"><img className="photo" src="https://sv1.picz.in.th/images/2020/02/14/xK1HvZ.png" alt="xK1HvZ.png" border="0" width="auto" height="32" /></a>
                    <a href="/" id="home">หน้าหลัก <i className="fas fa-home"></i></a>
                    <a id="review">รีวิวนิยาย <i className="fas fa-edit"></i></a>
                    <a id="broad">กระทู้ <i className="fas fa-comments"></i></a>
                    <a href={`/user/${user?user._id:''}/readlater`} id="saved">เก็บไว้อ่าน <i className="fas fa-heart"></i></a>
                    <div className="back-navbar">
                    { Link }
                    <span className="search"><i className="fas fa-search"></i><text className="searchNiyay">ค้นหารีวิวนิยาย</text></span> 
                    </div>
                </div>
                </nav>
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