import React , {Component} from 'react';
import './aduser.css';
import Table from 'react-bootstrap/Table';
import Navbar from "../admin_navbar/navbar";
import axios from 'axios';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const User = props => (
    <tr>
        <td>{props.user._id}</td>
        <td>{props.user.userName}</td>
        <td>{props.user.userImage}</td>
        <td>{props.user.userEmail}</td>
        <td>{props.user.userJoin}</td>
        {/* <td>{props.user.logReview}</td> */}
        {/* {homes.map(home => <div>{home.name}</div>)} */}        
        <td>
            <button onClick={() => { props.deleteUser(props.user._id) }}>ลบ</button>
        </td>
    </tr>
)

class Aduser extends Component {
    
    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this);

        this.state = {users: []}
    }

    componentDidMount() {
        axios.get('http://localhost:4000/admin/users/')
        .then(response => {
            this.setState({ users: response.data })
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

    deleteUser(id) {

        axios.delete('http://localhost:4000/admin/users/'+id)
                .then(response => { console.log(response.data)});
        
        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
    }
                        
    

    userList() {
        return this.state.users.map(currentuser => {
            return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
        })
    }

    render() {

        const { users } = this.state;
        if(this.props.user.user){
            return (
                <div>
                    <Navbar/>
                    <div className='topicPage'>
                        <p className="topicName">ข้อมูลผู้ใช้งาน</p>
                    </div>

                    <div className ="adminTable">
                        <Table className ="adminTable">
                            <thead>
                                <tr>
                                <th>user ID</th>
                                <th>ชื่อผู้ใช้</th>
                                <th>รูปผู้ใช้งาน</th>
                                <th>E-mail</th>
                                <th>วันที่เข้ารวม</th>
                                {/* <th>ประวัติรีวิว</th> */}
                                <th>แก้ไข</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    {this.state.users.map(user=> <td>{user.userID}</td>)}
                                    {this.state.users.map(user=> <td>{user.userName}</td>)}
                                    {this.state.users.map(user=> <td>{user.userImage}</td>)}
                                    {this.state.users.map(user=> <td>{user.userEmail}</td>)}
                                    {this.state.users.map(user=> <td>{user.userJoin}</td>)}
                                    {this.state.users.map(user=> <td>{user.logReview}</td>)}
                                </tr> */}
                                { this.userList() }
                                
                            </tbody>
                        </Table>
                    </div>
            </div>
        )
        }else{return ''}
    }
}



export default connect(mapStateToProps,null)(Aduser);
