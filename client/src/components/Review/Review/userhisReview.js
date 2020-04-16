import React, { Component } from 'react';
import './userhisReview.css';
import dateFormat from 'dateformat'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { addReadLater, deleteReadLater } from '../../../Redux/Actions/readlaterAction'
import { deleteReview } from '../../../Redux/Actions/reviewAction'
import store from '../../../Redux/store';
import { DELETE_READ_LATER_COMPLETED } from '../../../Redux/constants';

const mapStateToProps = state => {
    return {
        user: state.user,
        readLater: state.readLater
    }
}
class UserHisReview extends Component{
    constructor(props){
        super(props);

        this.state = {
            save: null,
            heart: ''
        }
        this.toggleSave = this.toggleSave.bind(this)
    }

    toggleSave = () => {
        this.setState({
            save: !this.state.save
        })
    }


    static propTypes = {
        user: PropTypes.object.isRequired,
        addReadLater: PropTypes.func.isRequired,
        deleteReadLater: PropTypes.func.isRequired,
        deleteReview: PropTypes.func.isRequired
    }
    
    componentWillReceiveProps(nextProps){
        let heart_white = <i className="far fa-heart" onClick={()=>{this.props.addReadLater(this.props.review._id,()=>this.toggleSave());}}></i>
        let heart_black = <i className="fas fa-heart" onClick={()=>{this.props.deleteReadLater(this.props.review._id,()=>this.toggleSave());}}></i>
        if((nextProps.user.user !== this.props.user.user) && nextProps.review){
            if(nextProps.user.user.readLater.some(review => review._id === nextProps.review._id)){
                this.setState({
                    heart: heart_black,
                    save: true
                }/*,()=>console.log('did mount save true',this.state.save)*/)
            }else{
                this.setState({
                    heart: heart_white,
                    save: false
                }/*,()=>console.log('did mount save false',this.state.save)*/)
            }
        }
    }


    componentDidUpdate(prevProps, prevState){
        /* Bug!! after unsave, review in next index of deleted review will chang save state to false */
        /* It must set state after delete readlater completed */
        let heart_white = <i className="far fa-heart" onClick={()=>{this.props.addReadLater(this.props.review._id,()=>this.toggleSave());}}></i>
        let heart_black = <i className="fas fa-heart" onClick={()=>{this.props.deleteReadLater(this.props.review._id,()=>this.toggleSave());}}></i>
        //console.log('save ',this.props.review.rvTitle,' ',this.state)
        
        if(prevState.save !== this.state.save){
                if(this.state.save===true){
                    this.setState({heart:heart_black})
                }else{
                    this.setState({heart:heart_white})
                }
            
        }
    }
    
    render(){
        return(
            <div className="show-box userHis">
                <div className="show-review">
                    <div className="in-box">
                        <div>
                            <Link key={this.props.review?this.props.review._id:''} to={`/review/${this.props.review?this.props.review._id:''}`}>
                                <div className="novel-name bold">{this.props.review?this.props.review.rvTitle:''}</div>
                            </Link>
                            <div className="date">
                                {this.props.review?dateFormat(this.props.review.rvTime, 'dd/mm/yyyy'):''}
                                    
                                <div className="heart-fav">{this.state.heart}</div>
                                
                            </div>
                        </div>
                        {this.props.isUserReview?'':
                        <div>
                            <div className="review-name bold">รีวิวโดย</div>
                        <div className="review-name">{this.props.review?this.props.review.user_id:''}</div>
                        </div>
                        }
                        <div>
                            <div className="type bold">หมวดหมู่
                                {this.props.review?this.props.review.rvType.map((type,i) => 
                                    <Link key={i} to={`/review/category?category=${type}`} >
                                       <span className="subtype" key={i}>{type}</span>
                                    </Link>
                                    )
                                    :''
                                }
                            </div>
                        </div>
                        <div>
                            <div className="tag bold">แท็ก
                            {this.props.review?this.props.review.rvTag.map((tag,i) => 
                                <Link key={i} to={`/review/tag?tag=${encodeURIComponent(tag)}`}>
                                     <span className="subtag" key={i}>{tag}</span>
                                </Link>
                                )
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
                            <div className="rating-his bold">เรตติ้ง</div>
                            <div className="num-com">
                            <div className="num-of-read"><i id="icon-b" className="fas fa-eye"></i>{this.props.review?this.props.review.rvView_Num:''}</div>
                            <div className="comment"><i id="icon-b" className="far fa-comment-dots"></i>คอมเม้นต์</div>
                            {this.props.isUserReview?
                                <div className="edit">
                                    <a href={`/review/${this.props.review?this.props.review._id:''}/edit`}><span>แก้ไข</span></a>
                                    <span className="delete-review" onClick={()=>this.props.deleteReview(this.props.review._id)}>
                                        ลบ
                                    </span>
                                </div>
                                :''
                            }
                        </div>
                        </div>                        
                    </div>               
                </div>          
            </div>
        )
    }
}
export default connect(mapStateToProps, { addReadLater, deleteReadLater, deleteReview })(UserHisReview);

