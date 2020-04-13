import React, {Component} from 'react';
import './ReadLater.css';
import Rating from '../../Review/Rating/rating';
import NavBar from '../../Bar/NavBar/NavBar'
import {connect} from 'react-redux'

import { getReadLater } from '../../../Redux/Actions/readlaterAction'
import Review from '../../Review/Review/userhisReview'



const mapStateToProps = state =>{
    return {
        user: state.user,
        readLater: state.readLater
    }
}
class ReadLater extends Component{

    constructor(props){
        super(props);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.user !== this.props.user.user){
            /* get readlater'user date if user exist */
            this.props.getReadLater(nextProps.user.user._id)
        }
    }

    render(){
        return(
            <div>
                <NavBar/>
                <div className="row">
                    <div className="col-sm containerReview">
                        <div className="reviewName">บันทึก</div>
                        <hr className="new5"></hr>
                        {this.props.readLater?
                            this.props.readLater.readLater.map((review,index)=>
                                <Review review={review} key={index} />)
                            :null
                        }                           
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,{ getReadLater })(ReadLater);