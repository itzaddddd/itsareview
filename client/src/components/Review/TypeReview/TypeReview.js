import React, {Component} from 'react';
import './TypeReview.css';
import Rating from '../Rating/rating';
//import './Tag.css';
//import Tag from '../Tag/Tag'
import NavBar from '../../Bar/NavBar/NavBar'
import {connect} from 'react-redux'

import { getCategory } from '../../../Redux/Actions/reviewAction'

import Review from '../Review/userhisReview'
import queryString from 'query-string'
const mapStateToProps = state =>{
    return {
        user: state.user,
        review: state.review
    }
}
class TypeReview extends Component{

    constructor(props){
        super(props);
    }
    /* get category from database */
    componentDidMount(){
        let values = queryString.parse(this.props.location.search)
        this.props.getCategory(values.category)
    }
    /* refresh data if click other link*/
    componentWillReceiveProps(nextProps){
        let next_values = queryString.parse(nextProps.location.search)
        let this_values = queryString.parse(this.props.location.search) 
        if(next_values.category !== this_values.category){
            this.props.getCategory(next_values.category)
        }
    }

    render(){
        let values = queryString.parse(this.props.location.search)
        let type = values.category
        let category = this.props.review.category
        return(
            <div>
                <NavBar/>
                <div className="row">
                    <div className="col-sm containerReview">
                        <div className="reviewName">{type}</div>
                        <hr className="new5"></hr>
                        {category.map(review => 
                                <Review review={review} key={review._id} />
                            )
                        }
                    </div>
                </div>
            </div>
        )}
}

export default connect(mapStateToProps,{ getCategory })(TypeReview);