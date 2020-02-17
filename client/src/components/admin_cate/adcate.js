import React , {Component} from 'react';
import './adcate.css';
import Table from 'react-bootstrap/Table';
import {PopUp} from './popUpAddcate';
<<<<<<< HEAD
import Navbar from "../admin_navbar/navbar.js";
=======
import Navbar from "../admin_navbar/navbar";
>>>>>>> 439ced71b61426153f0e66035b04e58158ab3094

class Admin_cate extends Component {

    constructor(props) {
        super(props);
        this.state ={PopUp : false}
    }

    state = {
        seen: false
        };

    render() {

        let PopUpClose =() => this.setState({PopUp:false});

        return (
            <div>
                <Navbar/>
                <div className='topicPage'>
                    <p className="topicName">จัดการหมวดหมู่</p>
                    <button className="addCate" onClick={()=> this.setState({PopUp: true})}>เพิ่มหมวดหมู่</button>
                    <PopUp show={this.state.PopUp} onHide={PopUpClose} />
                </div>

                

                <div className ="table">
                    <Table>
                        <thead>
                            <tr>
                                <th>Category ID</th>
                                <th>ชื่อหมวดหมู่</th>
                                <th>ไอคอน</th>
                                <th>จัดการ</th>
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
                                <td>212224</td>
                                <td>โรแมนติก</td>
                                <td><img src="https://sv1.picz.in.th/images/2020/02/14/xK1HvZ.png" style={{width:'7em'}}></img></td>
                                <td>
                                    <p className='edit'><a /*onClick={<Pops toggle={this.togglePop}/>}*/>แก้ไข</a></p>
                                    <p className='edit'><a>ลบ</a></p>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>
                                    <p className='edit'><a>แก้ไข</a></p>
                                    <p className='edit'><a>ลบ</a></p>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
    
}
    // let {userID} = this.props;
    // let {name} = this.props;
    // let {pic} = this.props;
    // let {email} = this.props;
    // let {joinDate} = this.props;
    // let {userHisBoard} = this.props;
    // let {userHisReview} = this.props;


export default Admin_cate;
