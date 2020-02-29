import React , {Component} from 'react';
import './aduser.css';
import Table from 'react-bootstrap/Table';
import Navbar from "../admin_navbar/navbar.js";
import {PopUpDelUser} from "./delUserPopUp";

class Aduser extends Component {
    
    constructor(props) {
        super(props);
        this.state ={PopUpDelUser : false}
    }

    state = {
        seen: false
    };

    render() {

        let PopUpClose =() => this.setState({PopUpDelUser:false});

        return (
            <div>
                <Navbar/>
                <div className='topicPage'>
                    <p className="topicName">ข้อมูลผู้ใช้งาน</p>
                </div>

                <div className ="table">
                    <Table>
                        <thead>
                            <tr>
                            <th>user ID</th>
                            <th>ชื่อผู้ใช้</th>
                            <th>รูปผู้ใช้งาน</th>
                            <th>E-mail</th>
                            <th>วันที่เข้ารวม</th>
                            <th>ประวัติกระทู้</th>
                            <th>ประวัติรีวิว</th>
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
                            <td>eizthaymu</td>
                            <td>none</td>
                            <td>eizza@kmutt.ac.th</td>
                            <td>วันนี้</td>
                            <td>none</td>
                            <td>none</td>
                            <td className='del'>
                                <a className="addCate" onClick={()=> this.setState({PopUpDelUser: true})}>ลบ</a>
                                <PopUpDelUser show={this.state.PopUpDelUser} onHide={PopUpClose} />
                            </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
        </div>
        )
    }
}



export default Aduser;