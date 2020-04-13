import React, {Component} from 'react';
import './TagReview.css';
import Rating from '../Rating/rating';
//import './Tag.css';
//import Tag from '../Tag/Tag'
import NavBar from '../../Bar/NavBar/NavBar'
import {connect} from 'react-redux'

import { getTag } from '../../../Redux/Actions/reviewAction'

import Review from '../Review/userhisReview'
import queryString from 'query-string'


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
        let values = queryString.parse(this.props.location.search)
        this.props.getTag(values.tag)
    }
    /* refresh data if click other link*/
    componentWillReceiveProps(nextProps){
        let next_values = queryString.parse(nextProps.location.search)
        let this_values = queryString.parse(this.props.location.search) 
        if(next_values.tag !== this_values.tag){
            this.props.getTag(next_values.tag)
        }
    }

    render(){
        let values = queryString.parse(this.props.location.search) 
        let title = values.tag
        let tag = this.props.review.tag
        return(
            <div>
                <NavBar/>
                <div className="row">
                    <div className="col-sm containerReview">
                        <div className="reviewName">{title}</div>
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