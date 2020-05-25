import React from 'react';
import './adboard.css';

import Table from 'react-bootstrap/Table';
import Navbar from "../admin_navbar/navbar";



function Adreview(props) {
    // let {userID} = this.props;
    // let {name} = this.props;
    // let {pic} = this.props;
    // let {email} = this.props;
    // let {joinDate} = this.props;
    // let {userHisBoard} = this.props;
    // let {userHisReview} = this.props;
    
    return (
        <div>
            <Navbar/>
            <div className='topicPage'>
                <p className="topicName">ข้อมูลกระทู้</p>
            </div>

            <div className ="table">
                <Table>
                    <thead>
                        <tr>
                        <th>Board ID</th>
                        <th>User ID</th>
                        <th>ชื่อผู้ใช้</th>
                        <th>ชื่อกระทู้</th>
                        <th>เวลา</th>
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
                        <td className='delUser'><a>ลบ</a></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
        
    )


}

export default Adreview;