import React, {Component} from 'react';
import './TagReview.css';
import Rating from '../Rating/rating';
//import './Tag.css';
//import Tag from '../Tag/Tag'
import NavBar from '../../Bar/NavBar/NavBar'
import {connect} from 'react-redux'

import { getTag } from '../../../Redux/Actions/reviewAction'

import Review from '../Review/userhisReview'


const mapStateToProps = state =>{
    return {
        user: state.user,
        review: state.review
    }
}
class TagReview extends Component{

    constructor(props){
        super(props);
    }
    /* get category from database */
    componentDidMount(){
        let id = this.props.match.params.id
        this.props.getTag(id)
    }
    /* refresh data if click other link*/
    componentWillReceiveProps(nextProps){
        let id = this.props.match.params.id
        if(nextProps.review.category != this.props.review.category){
            this.props.getTag(id)
        }
    }

    render(){
        let id = this.props.match.params.id
        let tag = this.props.review.tag
        return(
            <div>
                <NavBar/>
                <div className="row">
                    <div className="col-sm containerReview">
                        <div className="reviewName">{id}</div>
                        <hr className="new5"></hr>
                        {tag.map(review => 
                                <Review review={review} key={review._id} />
                            )
                        }
                    </div>
                </div>
            </div>
        )}
}

export default connect(mapStateToProps,{ getTag })(TagReview);