import React, { Component } from 'react';
import './adreview.css';
import Table from 'react-bootstrap/Table';
import Navbar from "../admin_navbar/navbar";
// import {PopUpDelReview} from "./PopUpDelReview";
import axios from 'axios';

const Review = props => (
    <tr>
      <td className="rvID">{props.review._id}</td>
      <td>{props.review.rvTitle}</td>
      {/* <td>{props.review.user_id}</td> */}
      <td>{props.review.rvTime}</td>
      <td>{props.review.rvType}</td>
      <td>{props.review.rvTag}</td>
      <td>
        จะแล้วมั้ย{/* <Link to={"/admin/categories/update/"+props.category._id}>แก้ไข</Link> | <button onClick={() => { props.deleteCategory(props.category._id) }}>ลบ</button> */}
      </td>
    </tr>
  )

export default class Adreview extends Component {


    constructor(props) {
        super(props);
        this.state = {reviews: [{}]}
        // this.state ={PopUpDelReview : false}
        
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

    reviewList() {
        return this.state.reviews.map(currentreview => {
            return <Review review={currentreview} key={currentreview._id}/>;
        })
    }


    render() {
        
        // let PopUpClose =() => this.setState({PopUpDelReview:false});

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
                                {/* <th>User ID</th> */}
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
    }
}
