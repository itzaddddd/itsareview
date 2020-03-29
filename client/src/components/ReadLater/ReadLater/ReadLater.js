import React, {Component} from 'react';
import './ReadLater.css';
import Rating from '../../Review/Rating/rating';
//import './Tag.css';
//import Tag from '../Tag/Tag'
import NavBar from '../../Bar/NavBar/NavBar'
import {connect} from 'react-redux'

import { getCategory } from '../../../Redux/Actions/reviewAction'

import Review from '../../Review/Review/userhisReview'


const mapStateToProps = state =>{
    return {
        user: state.user,
        review: state.review
    }
}
class ReadLater extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <NavBar/>
                <div className="row">
                    <div className="col-sm containerReview">
                        <div className="reviewName">บันทึก</div>
                        <hr className="new5"></hr>
                        
                    </div>
                </div>
            </div>
        )}
}

export default connect(mapStateToProps,{ getCategory })(ReadLater);