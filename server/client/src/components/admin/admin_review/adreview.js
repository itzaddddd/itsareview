import React, { Component } from 'react';
import './adreview.css';
import Table from 'react-bootstrap/Table';
import Navbar from "../admin_navbar/navbar";
// import {PopUpDelReview} from "./PopUpDelReview";
import axios from 'axios';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
const Review = props => (
    <tr>
        <td className="rvID">{props.review._id}</td>
        <td>{props.review.rvTitle}</td>
        <td>{props.review.user_id}</td>
        <td>{props.review.rvTime}</td>
        <td>{props.review.rvType}</td>
        <td>{props.review.rvTag}</td>
        <td>
            <button onClick={() => {if(window.confirm('คุณต้องการลบรีวิว ' + props.review.rvTitle + ' จากผู้ใช้ ' + props.review.user_id)) {props.deleteReview(props.review._id)}}}>ลบ</button>
        </td>
    </tr>
  )

class Adreview extends Component {


    constructor(props) {
        super(props);
        this.state = {reviews: [{}]}
        // this.state ={PopUpDelReview : false}
        this.deleteReview = this.deleteReview.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/admin/reviews/')
        .then(response => {
            this.setState({ reviews: response.data })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    /* redirect to home if not admin */
    componentWillReceiveProps(nextProps){
        if((nextProps.user !== this.props.user) && nextProps.user.user){
            if(!nextProps.user.user.isAdmin){
                this.props.history.push('/')
            }
        }
    }

    reviewList() {
        return this.state.reviews.map(currentreview => {
            return <Review review={currentreview} key={currentreview._id} deleteReview={this.deleteReview}/>;
        })
    }

    deleteReview(id) {

        axios.delete('http://localhost:4000/admin/reviews/'+id)
                .then(response => { console.log(response.data)});
        
        this.setState({
            reviews: this.state.reviews.filter(el => el._id !== id)
        })
    }


    render() {
            
        if(this.props.user.user){
            return (
                <div>
                    <Navbar/>
                    <div className='topicPage'>
                        <p className="topicName">ข้อมูลรีวิว</p>
                    </div>

                    <div className ="adminTableReview">
                        <Table className="TableReview" responsive hover size="sm">
                            <thead>
                                <tr>
                                    <th>Review ID</th>
                                    <th>ชื่อรีวิว</th>
                                    <th>User ID</th>
                                    <th>เวลาที่รีวิว</th>
                                    <th>หมวดหมู่</th>
                                    <th>แท็กที่เกี่ยวข้อง</th>
                                    <th>แก้ไข</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.reviewList() }
                            </tbody>
                        </Table>
                    </div>
                </div>
            )
        }else{return ''}
    }
}
export default connect(mapStateToProps,null)(Adreview);