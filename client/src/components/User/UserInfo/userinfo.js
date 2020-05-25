import React, { Component } from 'react';
import './userinfo.css';
import Navbar from '../../Bar/NavBar/NavBar';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' // redux hook function for use global props (user data)
import PropTypes from 'prop-types'
import Review from '../../Review/Review/userhisReview'
import { loadUser } from '../../../Redux/Actions/userAction';
import Pagination from 'react-paginate'
import { WaveLoading } from 'react-loadingg'

const mapStateToProps = props => {
    return {
        user: props.user,
        review: props.review
    }
}
class UserInfo extends Component{

    constructor(props){
        super(props)

        this.state = {
            offset: 0,
            reviews:[],
            reviewsSize: 0,
            perPage: 5,
            currentPage: 0
        }
    }

    static propTypes = {
        user: PropTypes.object.isRequired,
        review: PropTypes.object.isRequired
    }

    receiveData = () => {
        const data = this.props.user.user.logReview
        const slice = data.slice(
            this.state.offset,
            this.state.offset+this.state.perPage
        )
        const postData = slice.map(review => 
            <Review review={review} key={review._id} />
        )

        this.setState({
            pageCount: Math.ceil(data.length/ this.state.perPage),
            reviewsSize: data.length,
            postData
        })
    }

    handlePageClick = e => {
        const selectedPage = e.selected
        const offset = selectedPage * this.state.perPage
        this.setState({
            currentPage: selectedPage,
            offset: offset
        },()=>{
            this.receiveData()
        }
        )
    }
    componentDidUpdate(prevProps){
        if(prevProps.review.is_deleted !== this.props.review.is_deleted && prevProps.review.is_deleted===false){
            this.props.loadUser()
        }

        if(prevProps.user !== this.props.user){
            if(this.props.user.user){
                this.receiveData()
            }
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
                        <div className="col-sm-12 userinfo"><i className="far fa-user fa-2x"></i><p className="info">{this.props.user.user?this.props.user.user.userName:null}</p></div>
                        <div className="col-sm-12 userinfo"><i className="far fa-user fa-2x"></i><p className="info">{this.props.user.user?this.props.user.user.penName:null}</p></div>
                        <div className="col-sm-12 userinfo"><i className="far fa-envelope fa-2x"></i><p className="info">{this.props.user.user?this.props.user.user.userEmail:null}</p></div>
                    </div>
                    
                    <div id="edit">
                        <a href={`/user/${this.props.user.user?this.props.user.user._id:''}/edit`}><button className="button-edit">แก้ไข</button></a>
                    </div>

                    <div className="history" >
                        <h3>ประวัติ</h3>
                        <hr></hr>
                        <div className="review">
                            <i className="fas fa-star fa-2x"></i>  <p className="topicHistory">นิยายที่รีวิว ({this.state.reviewsSize || ''})</p>
                            {/*<div className="show"></div>*/}
                            {/*<UserHisReview />*/}
                        </div>
                        {/*<div className="board">
                            <a href="#"><i className="fas fa-comments fa-2x"></i>  กระทู้ที่คยเขียน</a>
                            <a className="more" href="#">ดูเพิ่มเติม  <i className="fas fa-angle-double-right"></i></a>
                            <div className="show"></div>
                        </div>*/}

                        {/*show user reviewed */}
                        <div className="review-his">
                            {this.state.postData}
                            {this.state.postData?
                                <Pagination
                                    previousLabel={<i className="fas fa-chevron-left"></i>}
                                    nextLabel={<i className="fas fa-chevron-right"></i>}
                                    breakLabel={"..."}
                                    breakClassName={"break-me"}
                                    pageCount={this.state.pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={this.state.perPage}
                                    onPageChange={this.handlePageClick}
                                    containerClassName={"pagination"}
                                    subContainerClassName={"pages pagination"}
                                    activeClassName={"active"}
                                />:
                                <WaveLoading color="#B9D253" size="small"/>
                            }
                        </div>
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