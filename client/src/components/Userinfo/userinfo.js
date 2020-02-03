import React, { Component } from 'react';
import './userinfo.css';


class UserInfo extends Component{
    constructor(props){

    }

    render(){
        let img = props.img;
        let username = props.username;
        let name = props.name;
        let email = props.email;
        return(
            <div>
                <div class="header">
                    <div class="avatar">
                        <img src={img} alt="avatar" />
                    </div>    
                </div>
                
                <div class="rowname">
                    <div class="col-sm-12" id="line1"><a href="#"><i class="far fa-user fa-2x"></i>  {username}</a></div>
                    <div class="col-sm-12"><a href="#"><i class="far fa-user fa-2x"></i>  {name}</a></div>
                    <div class="col-sm-12"><a href="#"><i class="far fa-envelope fa-2x"></i>  {email}</a></div>
                </div>
                
                <div id="edit">
                    <button class="button-edit">แก้ไข</button>
                </div>

                <div class="history" >
                    <h3>ประวัติ</h3>
                    <hr></hr>
                    <div class="review">
                        <a href="#"><i class="fas fa-star fa-2x"></i>  นิยายที่รีวิว</a>
                        <a class="more" href="#">ดูเพิ่มเติม  <i class="fas fa-angle-double-right"></i></a>
                        <div class="show"></div>
                    </div>
                    <div class="board">
                        <a href="#"><i class="fas fa-comments fa-2x"></i>  กระทู้ที่คยเขียน</a>
                        <a class="more" href="#">ดูเพิ่มเติม  <i class="fas fa-angle-double-right"></i></a>
                        <div class="show"></div>
                    </div>
                </div>


            </div>
        )
    }
}
export default UserInfo;