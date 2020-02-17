import React, { Component } from 'react';
import './userinfo.css';
import axios from 'axios';

class UserInfo extends Component{
    constructor(props){
        super(props)
    }

    getUser = () => {
        axios.get('http://localhost:4000/user/')
        .then(
            
        )
        .catch(

        )
    }

    componentDidMount(){
        // getUser();
    }

    render(){
        let img = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'; 
        // props.img;
        let username = 'eizthaymu';
        // props.username;
        let name = 'Eiz Thaymu';
        // props.name;
        let email = 'eizthaymu@gmail.com';
        // props.email;
        return(
            <div>
                <div className="header">
                    <div className="avatar">
                        <img className="avatar" src={img} alt="avatar" />
                    </div>    
                </div>
                
                <div className="rowname">
                    <div className="col-sm-12" id="line1"><i className="far fa-user fa-2x"></i>  {username}</div>
                    <div className="col-sm-12"><i className="far fa-user fa-2x"></i>  {name}</div>
                    <div className="col-sm-12"><i className="far fa-envelope fa-2x"></i>  {email}</div>
                </div>
                
                <div id="edit">
                    <button className="button-edit">แก้ไข</button>
                </div>

                <div className="history" >
                    <h3>ประวัติ</h3>
                    <hr></hr>
                    <div className="review">
                        <i className="fas fa-star fa-2x"></i>  นิยายที่รีวิว
                        <a className="more">ดูเพิ่มเติม  <i className="fas fa-angle-double-right"></i></a>
                        <div className="show"></div>
                    </div>
                    {/*<div className="board">
                        <a href="#"><i className="fas fa-comments fa-2x"></i>  กระทู้ที่คยเขียน</a>
                        <a className="more" href="#">ดูเพิ่มเติม  <i className="fas fa-angle-double-right"></i></a>
                        <div className="show"></div>
                    </div>*/}
                </div>


            </div>
        )
    }
}
export default UserInfo;