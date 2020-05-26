import React, {Component} from 'react';
import './menu.css';

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Menu extends Component{

    static propTypes = {
        user: PropTypes.object.isRequired
    }

    render(){

        const { user } = this.props.user; /*error with isAuthenticated (get html code instead of user data)*/
        const memberLinks = (
            <a className="menuButton" href={`/user/${user ? user._id:null}`} id="username">
                <li><i className="menu far fa-user fa-2x"></i><p className="menu-name">{ user ? user.userName : 'ชื่อสมาชิก'}</p></li>
            </a>
        );

        const guestLinks = (
            
            <a className="menuButton" href="/login" id="login">
                <li><i className="menu far fa-user fa-2x"></i><p className="menu-name">เข้าสู่ระบบ</p></li>
            </a>
            
        );

        return(
            <div>
                <div className="foot-main-navigation">
                    <nav cladss="fooot">
                        <ul className="foot">
                            {/* comment navbar because show only home and user and other will create in next sprint */}
                            {/* add class menu for creating css*/}
                            <a className="menuButton" href="/"><li><i class="fas fa-home fa-2x"></i><p className="menu-name">หน้าหลัก</p></li></a>
                            <a className="menuButton" href="/review/create"><li><i className="menu far fa-edit fa-2x"></i><p className="menu-name">เขียนรีวิวนิยาย</p></li></a>
                            <a className="menuButton" href={`/user/${user?user._id:''}/readlater`}><li><i className="menu far fa-heart fa-2x"></i><p className="menu-name">เก็บไว้อ่าน</p></li></a>
                            {user||this.props.user.isLoading? memberLinks:guestLinks}
                        </ul>
                    </nav>
                </div> 
            </div>      
        )    
    }
    
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const MenuConnect = connect(mapStateToProps,null)(Menu)
export default MenuConnect;