import React, {Component} from 'react';
import './review_page.css';
import Rating from '../Rating/rating';
//import './Tag.css';
//import Tag from '../Tag/Tag'
import NavBar from '../../Bar/NavBar/NavBar'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getReview, getCategory, getUserById } from '../../../Redux/Actions/reviewAction'
import dateFormat from 'dateformat'

const mapStateToProps = state =>{
    return {
        user: state.user,
        review: state.review
    }
}
class ReviewPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        this.setState({
            isLoading: false
        })
        let review_id = this.props.match.params.id
        this.props.getReview(review_id)
    }

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.review != this.props.review){
    //         this.props.getUserById(nextProps.review.review.user_id)
    //     }
    // }

    render(){
        let review = this.props.review.review
        if(this.state.isLoading)return ''
        return(
            <div>
                <NavBar/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm containerReview">
                            <div className="reviewName">{review.rvTitle}</div>
                            <hr className="new5"></hr>
                            <div className="reviewBy">รีวิวโดย<p className="reviewer">{review.user_id}</p></div>
                            <div className = "view"><i style={{color:"9FB444"}} className="far fa-clock"></i>{dateFormat(review.rvTime, 'dd/mm/yyyy')}</div>
                            <div className = "view"><i style={{color:"9FB444"}} className="fas fa-eye"></i>{review.rvView_Num}</div>
                            <div className="reviewBy">คะแนนนิยาย</div>
                            <div className="reviewBy">ที่มา {review.rvSource}</div>
                            <div className = "reviewBy2" id = "reviewby2_">หมวดหมู่นิยาย 
                                {review.rvType?review.rvType.map((type,i)=>
                                    <Link key={i} to={`/review/category/${type}`} >
                                        {type}
                                    </Link>    
                                ):''}
                            </div>
                            <div className = "reviewBy2">แท็ก {review.rvTag}</div>
                            
                            
                            <div className = "reviewBy3">รีวิวตัวละคร</div>
                            <div className = "boxContent">{review.rvChar}</div>
                            <div className = "reviewBy3">รีวิวเนื้อเรื่อง</div>
                            <div className = "boxContent">{review.rvContent}</div>
                            <div className = "reviewBy3">รูปภาพ</div>
                            {review.rvImage?
                                <div className = "boxContent">
                                    <img src={review.rvImage} width="300" height="auto" alt="image" />
                                </div>:''}
                            <hr className="line">
                            
                            </hr>
                            <div className = "reviewBy4">ให้คะแนนรีวิวนี้</div>
                            <Rating></Rating>
                            {/*This section will be implemented in next sprint*/}
                            {/*<hr className="new4"></hr>
                                <div className = "givereview">ให้คะแนนรีวิวนี้</div>
                                    <Rating />
                            <hr className="new4"></hr>*/}
                        </div>
                    </div>
                </div>
            </div>
        )}
}

export default connect(mapStateToProps,{ getReview, getCategory, getUserById })(ReviewPage);
