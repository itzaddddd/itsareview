import React, {Component} from 'react';
import './review_page.css';
import Rating from '../Rating/rating';
//import './Tag.css';
//import Tag from '../Tag/Tag'
import NavBar from '../../Bar/NavBar/NavBar'
import {connect} from 'react-redux'

import { getReview } from '../../../Redux/Actions/reviewAction'


const mapStateToProps = state =>{
    return {
        user: state.user.user,
        review: state.review.review
    }
}
class ReviewPage extends Component{

    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     this.props.getReview(this.props.review._id,result=>{

    //     })
    // }

    componentDidMount(){
        let review_id = this.props.match.params.id
        this.props.getReview(review_id)
    }

    render(){
        let review = this.props.review
        return(
            <div>
                <NavBar/>
                <div className="row">
                    <div className="col-sm containerReview">
                        <div className="reviewName">{review.rvTitle}</div>
                        <hr className="new5"></hr>
                        <div className="reviewBy">รีวิวโดย<p className="reviewer">{review.user_id}</p></div>
                        <div className = "view"><i style={{color:"9FB444"}} className="far fa-clock"></i>{review.rvTime}</div>
                        <div className = "view"><i style={{color:"9FB444"}} className="fas fa-eye"></i>{review.rvView_Num}</div>
                        <div className="reviewBy">คะแนนนิยาย</div>
                        <div className="reviewBy">ที่มา {review.rvSource}</div>
                        <div className = "reviewBy2">หมวดหมู่นิยาย {review.rvType}</div>

                        <div className = "reviewBy2">แท็ก {review.rvTag}</div>
                        
                        
                        <div className = "reviewBy2">รีวิวตัวละคร</div>
                        <div className = "boxContent">{review.rvChar}</div>
                        <div className = "reviewBy2">รีวิวเนื้อเรื่อง</div>
                        <div className = "boxContent">{review.rvContent}</div>
                        <div className = "boxContent">
                            <img src={review.rvImage} width="300" height="auto" alt="image" />
                        </div>
                        {/*This section will be implemented in next sprint*/}
                        {/*<hr className="new4"></hr>
                            <div className = "givereview">ให้คะแนนรีวิวนี้</div>
                                <Rating />
                        <hr className="new4"></hr>*/}
                    </div>
                </div>
            </div>
        )}
}

export default connect(mapStateToProps,{ getReview })(ReviewPage);