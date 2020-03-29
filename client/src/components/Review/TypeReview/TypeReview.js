import React, {Component} from 'react';
import './TypeReview.css';
import Rating from '../Rating/rating';
//import './Tag.css';
//import Tag from '../Tag/Tag'
import NavBar from '../../Bar/NavBar/NavBar'
import {connect} from 'react-redux'

import { getCategory } from '../../../Redux/Actions/reviewAction'

import Review from '../Review/userhisReview'


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
        let id = this.props.match.params.id
        this.props.getCategory(id)
    }
    /* refresh data if click other link*/
    componentWillReceiveProps(nextProps){
        let id = this.props.match.params.id
        if(nextProps.review.category != this.props.review.category){
            this.props.getCategory(id)
        }
    }

    render(){
        let type = this.props.match.params.id
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