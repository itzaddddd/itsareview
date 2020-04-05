import React, { Component } from 'react';
import './userhisReview.css';
import dateFormat from 'dateformat'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import { addReadLater } from '../../../Redux/Actions/readlaterAction'
import { deleteReview } from '../../../Redux/Actions/reviewAction'
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
class UserHisReview extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            review: []
        }
    }

    static propTypes = {
        user: PropTypes.object.isRequired,
        addReadLater: PropTypes.func.isRequired,
        deleteReview: PropTypes.func.isRequired
    }

    render(){  
        return(
            <div className="show-box userHis">
                <div className="show-review">
                    <div className="in-box">
                        <div>
                            <Link key={this.props.review?this.props.review._id:''} to={`/review/${this.props.review?this.props.review._id:''}`}>
                                <div className="novel-name" className="bold">{this.props.review?this.props.review.rvTitle:''}</div>
                            </Link>
                            <div className="date">
                                {this.props.review?dateFormat(this.state.review.rvTime, 'dd/mm/yyyy'):''}
                                    
                                    <i className="far fa-heart love"></i>
                                
                            </div>
                        </div>
                        {this.props.isUserReview?'':
                        <div>
                            <div className="review-name" className="bold">ชื่อคนรีวิว</div>
                        <div className="review-name">{this.props.review?this.props.review.user_id:''}</div>
                        </div>
                        }
                        <div>
                            <div className="type" className="bold">หมวดหมู่
                                {this.props.review?this.props.review.rvType.map((type,i) => 
                                    <Link key={i} to={`/review/category/${type}`} >
                                       <span className="subtype" key={i}>{type}</span>
                                    </Link>
                                    )
                                    :''
                                }
                            </div>
                        </div>
                        <div>
                            <div className="tag" className="bold">แท็ก
                            {this.props.review?this.props.review.rvTag.map((tag,i) => 
                                // <Link key={i} to={`/review/tag/${tag}`}>
                                     <span className="subtag" key={i}>{tag}</span>)
                                // </Link>
                                
                                :''
                            }
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="story">{this.props.review?this.props.review.rvContent:''}</div>
                            </div>
                        </div>
                        <div>
                            <div className="rating">เรตติ้ง</div>
                            <div className="num-com">
                            <div className="num-of-read"><i id="icon-b" className="fas fa-eye"></i>{this.props.review?this.props.review.rvView_Num:''}</div>
                            <div className="comment"><i id="icon-b" className="far fa-comment-dots"></i>คอมเม้นต์</div>
                            {this.props.isUserReview?
                                <div className="edit">
                                    <a href={`/review/${this.props.review?this.props.review._id:''}/edit`}><span>แก้ไข</span></a>
                                    <span className="delete-review" /*onClick={this.props.review._id?this.props.deleteReview(this.props.review._id):''}*/>ลบ</span>
                                </div>
                                :''}
                        </div>
                        </div>                        
                    </div>               
                </div>          
            </div>
        )
    }
}
export default connect(mapStateToProps, { addReadLater, deleteReview })(UserHisReview);

