import React from 'react';
import './Typebar.css';


function Typebar(){
    return(
        <div>
            <center>
            <div className="choosetypepopup">
                <a href="#romatic"><i className="far fa-heart" id = "icon"></i><br></br>โรแมนติก</a>
                <a href="#drama"><i className="far fa-sad-tear" id = "icon"></i><br></br>ดราม่า</a>
                <a href="#comedy"><i className="far fa-laugh-squint" id = "icon"></i><br></br>คอมเมดี้</a>
                <a href="#feelgood"><i className="far fa-grin-tongue-wink" id = "icon"></i><br></br>ฟิลกู๊ด</a>
                <a href="#yaoi"><i className="fas fa-mars-double" id = "icon"></i><br></br>วาย</a>
                <a href="#yuri"><i className="fas fa-venus-double" id = "icon"></i><br></br>ยูริ</a>
                <a href="#addmore"><i className="fas fa-angle-double-right" id = "icon"></i>เพิ่มเติม</a>
            </div>
            </center>
            </div>         
            );
    }
    export default Typebar;