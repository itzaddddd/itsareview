import React, { Component } from 'react';
import './userinfo.css';
import Navbar from '../../Bar/NavBar/NavBar';
// import UserHisReview from '../UserhisReview/userhisReview';

import { connect } from 'react-redux' // redux hook function for use global state (user data)
import PropTypes from 'prop-types'
class UserInfo extends Component{

    static propTypes = {
        user: PropTypes.object.isRequired
    }

    render(){

        const { user } = this.props.user;
        console.log(user);

        return(
            <div>
                <Navbar logout={true}/>
                <div className="header">
                    <div className="avatar">
                        <img className="avatar" src={user?user.userImage:null} alt="avatar" />
                    </div>    
                </div>
                
                <div className="rowname">
                    <div className="col-sm-12" id="line1"><i className="far fa-user fa-2x"></i>{user?user.userName:null}</div>
                    <div className="col-sm-12"><i className="far fa-user fa-2x"></i>{user?user.userName:null}</div>
                    <div className="col-sm-12"><i className="far fa-envelope fa-2x"></i>{user?user.userEmail:null}</div>
                </div>
                
                <div id="edit">
                    <button className="button-edit">แก้ไข</button>
                </div>

                <div className="history" >
                    <h3>ประวัติ</h3>
                    <hr></hr>
                    <div className="review">
                        <i className="fas fa-star fa-2x"></i>  นิยายที่รีวิว
                        <a className="more">ดูเพิ่มเติม  <i className="fas fa-angle-double-right"></i></a>
                        {/*<div className="show"></div>*/}
                        {/*<UserHisReview />*/}
                    </div>
                    {/*<div className="board">
                        <a href="#"><i className="fas fa-comments fa-2x"></i>  กระทู้ที่คยเขียน</a>
                        <a className="more" href="#">ดูเพิ่มเติม  <i className="fas fa-angle-double-right"></i></a>
                        <div className="show"></div>
                    </div>*/}
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

const UserInfoConnect = connect(mapStateToProps,null)(UserInfo)
export default UserInfoConnect;