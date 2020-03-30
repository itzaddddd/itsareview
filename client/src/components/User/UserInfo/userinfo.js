import React, { Component } from 'react';
import './userinfo.css';
import Navbar from '../../Bar/NavBar/NavBar';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' // redux hook function for use global state (user data)
import PropTypes from 'prop-types'
import Review from '../../Review/Review/userhisReview'
import store from '../../../Redux/store'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
class UserInfo extends Component{

    constructor(props){
        super(props)
        this.state = {
            user: {}
        }
    }

    static propTypes = {
        user: PropTypes.object.isRequired
    }

    componentWillReceiveProps(nextProps){
        if((nextProps.user !== this.props.user) && (nextProps.user.user)){
            this.setState({user: nextProps.user.user})
        }
    }

    render(){
        if(this.state.user.userName){
            return(
                <div>
                    <Navbar logout={true}/>
                    <div className="header">
                        <div className="avatar">
                            {<img className="avatar" src={this.state.user?this.state.user.userImage:''} alt="avatar" />}
                        </div>    
                    </div>
                    
                    <div className="rowname">
                        <div className="col-sm-12" id="line1"><i className="far fa-user fa-2x"></i>{this.state.user?this.state.user.userName:null}</div>
                        <div className="col-sm-12"><i className="far fa-user fa-2x"></i>{this.state.user?this.state.user.userName:null}</div>
                        <div className="col-sm-12"><i className="far fa-envelope fa-2x"></i>{this.state.user?this.state.user.userEmail:null}</div>
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

                        {/*show user reviewed */}
                        {this.state.user.logReview.map(review => {
                            return (
                                
                                <Review review={review} key={review._id} isUserReview/>
                                
                            )
                        })}
                    </div>
                </div>
            )   
        }else{
            return ''
        }
    }
}

const UserInfoConnect = connect(mapStateToProps,null)(UserInfo)
export default UserInfoConnect;