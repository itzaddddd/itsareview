import React, {Component} from 'react';
import './review_page.css';
import Rating from '../Rating/rating';
import CommentBox from '../Comment/Comment'
import NavBar from '../../Bar/NavBar/NavBar'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getReview, getCategory, getUserById } from '../../../Redux/Actions/reviewAction'
import { addReadLater, deleteReadLater } from '../../../Redux/Actions/readlaterAction'
import dateFormat from 'dateformat'
import axios from 'axios'
import { WaveLoading } from 'react-loadingg'
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
            isLoading: true,
            heart: '',
            save: false,
            name: ''
        
        }
    }

    toggleSave = () => {
        this.setState({
            save: !this.state.save
        })
    }

    componentDidMount(){
        this.setState({
            isLoading: false
        })
        let review_id = this.props.match.params.id
        this.props.getReview(review_id)
    }

    componentWillReceiveProps(nextProps){
        /* if user login, can save review to read later  */
        /* check next props review is match a review in read later */
        /* if match, show black heart */
        /* if not match, show white heart */
        /* if guest, show nothing */
        let heart_white = <i className="far fa-heart" onClick={()=>{this.props.addReadLater(this.props.review.review._id);this.toggleSave()}}></i>
        let heart_black = <i className="fas fa-heart" onClick={()=>{this.props.deleteReadLater(this.props.review.review._id);this.toggleSave()}}></i>
        if((nextProps.review.review !== this.props.review.review) && this.props.user.user){
            if(nextProps.user.user.readLater.some(review => review._id === nextProps.review.review._id)){
                this.setState({
                    heart: heart_black,
                    save: true
                })
            }else{
                this.setState({
                    heart: heart_white,
                    save: false
                })
            }

            
        }
        if(nextProps.review.review !== this.props.review.review){
            axios.get(`/user/${nextProps.review.review.user_id}`)
            .then(res=>{
            console.log(res)
            if(res.data){
                this.setState({name: res.data.userName})
            }
            })
            .catch(err=>console.log(err))
            }
    }

    componentDidUpdate(prevProps, prevState){
        /* check if on click on heart, toggle heart */
        let heart_white = <i className="far fa-heart fav-heart" onClick={()=>{this.props.addReadLater(this.props.review.review._id);this.toggleSave()}}></i>
        let heart_black = <i className="fas fa-heart fav-heart" onClick={()=>{this.props.deleteReadLater(this.props.review.review._id);this.toggleSave()}}></i>
        if(prevState.save !== this.state.save){
            if(this.state.save === true){
                this.setState({heart: heart_black})
            }else{
                this.setState({heart: heart_white})
            }
        }
    }

    render(){
        let review = this.props.review.review
        if(this.state.isLoading)return ''
        if(review._id){
        return(
            <div>
                <NavBar/>
                <div className="containerReview">
                    <div className="row">
                        <div className="col-sm">
                            <div className="reviewName">{review.rvTitle}<div className="heart-fav1">{this.state.heart}</div></div>
                            <hr className="new5"></hr>
                            <div className="reviewBy">รีวิวโดย<p className="reviewer">{this.state.name}</p></div>
                            <div className = "date"><i style={{color:"9FB444"}} className="far fa-clock"></i><p className="date">{dateFormat(review.rvTime, 'dd/mm/yyyy')}</p></div>
                            <div className = "view"><i style={{color:"9FB444"}} className="fas fa-eye"></i><p className="view">{review.rvView_Num}</p></div>
                            {/*<div className="rating-niyay">คะแนนนิยาย</div>*/}
                            <div className="reviewBy2">ที่มา <p className="novel-source">{review.rvSource}</p></div>
                            <div className = "reviewBy2">หมวดหมู่นิยาย 
                                {review.rvType?review.rvType.map((type,i)=>
                                    (<span className="subtype">
                                        <Link key={i} to={`/review/category?category=${type}`} >
                                            {type}
                                        </Link>
                                    </span>)    
                                ):''}
                            </div>
                            <div className = "reviewBy2">แท็ก
                            {review.rvTag?review.rvTag.map((tag,i)=>
                                <span className="subtag">
                                    <Link key={i} to={`/review/tag?tag=${encodeURIComponent(tag)}`} >
                                        {tag}
                                    </Link> 
                                </span>   
                            ):''}
                            </div>
                            {/*<div className = "reviewBy2 reviewBy5">รีวิวตัวละคร</div>
                            <div className = "boxContent">{review.rvChar}</div>*/}
                            <div className = "reviewBy2 reviewBy5">รีวิวเนื้อเรื่อง</div>
                            <div className = "boxContent">{review.rvContent}</div>
                            {/*<div className = "reviewBy2 reviewBy5">รูปภาพ</div>*/}
                            {/*<div className = "boxContent">*/}
                            {/*review.rvImage?
                                review.rvImage.forEach(image=>{
                                    return <img src={image} width="35%" height="auto" alt="image" />
                                })
                            :
                            ''*/}
                            {/*</div>*/}
                            {/*<div className = "reviewBy4">ให้คะแนนรีวิวนี้
                                <Rating/>
                            </div>*/}
                            <hr className="new4"></hr>
                        </div>
                    </div>
                    <CommentBox />
                </div>
            </div>
            )}else{return <WaveLoading color="#B9D253"/>}
        }
}

export default connect(mapStateToProps,{ getReview, getCategory, getUserById, addReadLater, deleteReadLater })(ReviewPage);
