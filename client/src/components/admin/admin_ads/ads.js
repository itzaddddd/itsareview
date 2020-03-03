import React , {Component} from 'react';
import './ads.css';

import Table from 'react-bootstrap/Table';
import Navbar from "../admin_navbar/navbar";
// import Pops from './addbanner';


class Advertise extends Component {

    state = {
        seen: false
        };

    // togglePop = () => {
    //     this.setState({
    //         seen: !this.state.seen
    //     });
    // };

    render() {
        return (
            <div>
                <Navbar/>
                <div className='topicPage'>
                    <p className="topicName">จัดการโฆษณา</p>
                    <button className="addCate" /*onClick={this.togglePop}*/>เพิ่มแบนเนอร์</button>
                    {/* {this.state.seen ? <Pops toggle={this.togglePop} header="เพิ่มแบนเนอร์"/> : null} */}
                </div>
    
                <div className ="table">
                    <Table>
                        <thead>
                            <tr>
                                <th>ลำดับภาพ</th>
                                <th>รูปภาพ</th>
                                <th>ลิงก์</th>
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
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>
                                    <p className='edit'><a /*onClick={<Pops toggle={this.togglePop}/>}*/>แก้ไข</a></p>
                                    <p className='edit'><a>ลบ</a></p>
                                </td>
                                
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>   
        )
        }
    // let {userID} = this.props;
    // let {name} = this.props;
    // let {pic} = this.props;
    // let {email} = this.props;
    // let {joinDate} = this.props;
    // let {userHisBoard} = this.props;
    // let {userHisReview} = this.props;

}

export default Advertise;