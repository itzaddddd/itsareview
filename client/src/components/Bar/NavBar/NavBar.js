import React, { Component, Fragment } from 'react';
import './NavBar.css';

import Logout from '../../Auth/Logout/logout';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Menu from '../Menu/menu'

class NavBar extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired
    }

    render(){
        const { user } = this.props.user; /*error with isAuthenticated (get html code instead of user data)*/
        const memberLinks = (
            <span>
                <span>
                    <a href={`/user/${user ? user._id:null}`} id="username"   className="navbarButton"><strong>{ user ? user.userName : 'ชื่อสมาชิก'}</strong></a>
                </span>
                <Logout />                
            </span>
        );

        const guestLinks = (
            
                <a href="/login" id="login" className="navbarButton"><i className="fas fa-user" ></i> เข้าสู่ระบบ</a>
            
        );

        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="navHeader">
                        <a href="/"><img className="photo" src="https://sv1.picz.in.th/images/2020/02/14/xK1HvZ.png" alt="xK1HvZ.png" border="0" width="auto" height="32" /></a>
                        <a href="/" className="navbarButton homepagenavbar" id="home">หน้าหลัก <i className="fas fa-home"></i></a>
                        <a href="/dashboardShowReview" id="review" className="navbarButton">รีวิวนิยาย <i className="fas fa-edit"></i></a>
                        <a href="/dashboardShowBoard" id="broad" className="navbarButton">กระทู้ <i className="fas fa-comments"></i></a>
                        <a href={`/user/${user?user._id:''}/readlater`} id="saved"  className="navbarButton">เก็บไว้อ่าน <i className="fas fa-heart"></i></a>
                        {(user&&user.isAdmin)?<a href="/admin" id="admin">Admin <i className="fas fa-users-cog"></i></a>:''}
                        <span className="back-navbar">
                            <span>{user||this.props.user.isLoading? memberLinks:guestLinks}</span>
                            <a href="/search" className="search"><span className="search">  <i className="fas fa-search"></i><p className="searchNiyay">ค้นหารีวิว</p></span></a>
                        </span>
                    </div>
                </nav>

                <Menu/>
                
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