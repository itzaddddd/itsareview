import React, { Component } from 'react';
import './adreview.css';
import Table from 'react-bootstrap/Table';
import Navbar from "D:/SE/itsareview/client/src/components/admin_navbar/navbar.js";
import {PopUpDelReview} from "./delReviewPopUp";


export default class Adreview extends Component {
    // let {userID} = this.props;
    // let {name} = this.props;
    // let {pic} = this.props;
    // let {email} = this.props;
    // let {joinDate} = this.props;
    // let {userHisBoard} = this.props;
    // let {userHisReview} = this.props;

    constructor(props) {
        super(props);
        this.state ={PopUpDelReview : false}
    }

    state = {
        seen: false
    };

    render() {
        
        let PopUpClose =() => this.setState({PopUpDelReview:false});

        return (
            <div>
                <Navbar/>
                <div className='topicPage'>
                    <p className="topicName">ข้อมูลรีวิว</p>
                </div>

                <div className ="table">
                    <Table>
                        <thead>
                            <tr>
                                <th>Review ID</th>
                                <th>ชื่อรีวิว</th>
                                <th>User ID</th>
                                <th>ชื่อผู้ใช้</th>
                                <th>รูปผู้ใช้งาน</th>
                                <th>แก้ไข</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                            <td>{userID}</td>
                            <td>{name}</td>
                            <td>{pic}</td>
                            <td>{email}</td>
                            <td>{joinDate}</td>
                            <td>{userHisBoard}</td>
                            <td>{userHisReview}</td>
                            <td style={{textDecoration: 'underline'}}><a>ลบ</a></td>
                            </tr> */}
                            <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td className='del'>
                                    <a className="addCate" onClick={()=> this.setState({PopUpDelReview: true})}>ลบ</a>
                                    <PopUpDelReview show={this.state.PopUpDelReview} onHide={PopUpClose} />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            
        )
    }
}
