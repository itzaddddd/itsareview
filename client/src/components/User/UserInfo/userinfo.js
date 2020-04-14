import React, { Component } from 'react';
import './userinfo.css';
import Navbar from '../../Bar/NavBar/NavBar';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' // redux hook function for use global props (user data)
import PropTypes from 'prop-types'
import Review from '../../Review/Review/userhisReview'
import { loadUser } from '../../../Redux/Actions/userAction';

const mapStateToProps = props => {
    return {
        user: props.user,
        review: props.review
    }
}
class UserInfo extends Component{

    constructor(props){
        super(props)

    }

    static propTypes = {
        user: PropTypes.object.isRequired,
        review: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps){
        if(prevProps.review.is_deleted !== this.props.review.is_deleted && prevProps.review.is_deleted===false){
            this.props.loadUser()
        }
    }

    render(){
        if(this.props.user.user){
            return(
                <div>
                    <Navbar logout={true}/>
                    <div className="header">
                        <div className="avatar">
                            {<img className="avatar" src={this.props.user.user?this.props.user.user.userImage:''} alt="avatar" />}
                        </div>    
                    </div>
                    
                    <div className="rowname">
                        {/*<div className="col-sm-12 user1" id="line1"><i className="far fa-user fa-2x"></i>{this.state.user?this.state.user.userName:null}</div>
                        <div className="col-sm-12 user1"><i className="far fa-user fa-2x"></i>{this.state.user?this.state.user.userName:null}</div>
                        <div className="col-sm-12 user1"><i className="far fa-envelope fa-2x"></i>{this.state.user?this.state.user.userEmail:null}</div>*/}
                    </div>
                    
                    <div id="edit">
                        <button className="button-edit">แก้ไข</button>
                    </div>

                    <div className="history" >
                        <h3>ประวัติ</h3>
                        <hr></hr>
                        <div className="review">
                            <i className="fas fa-star fa-2x"></i>  <p className="topicHistory">นิยายที่รีวิว</p>
                            <a className="more">ดูเพิ่มเติม  <i className="fas fa-angle-double-right"></i></a>
                            {/*<div className="show"></div>*/}
                            {/*<UserHisReview />*/}
                        </div>
                        {/*<div className="board">
                            <a href="#"><i className="fas fa-comments fa-2x"></i>  กระทู้ที่คยเขียน</a>
                            <a className="more" href="#">ดูเพิ่มเติม  <i className="fas fa-angle-double-right"></i></a>
                            <div className="show"></div>
                        </div>*/}

                        {/*show user reviewed */}
                        {this.props.user.user?this.props.user.user.logReview.map(review => {
                            return (
                                
                                <Review review={review} key={review._id} isUserReview/>
                                
                            )
                        }):''}
                    </div>
                </div>
            )   
        }else{
            return ''
        }
    }
}

const UserInfoConnect = connect(mapStateToProps,{loadUser})(UserInfo)
export default UserInfoConnect;