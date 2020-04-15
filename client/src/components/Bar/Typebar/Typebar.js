import React from 'react';
import './Typebar.css';


function Typebar(){
    return(
        <div>
            <center>
            <div className="choosetypepopup">
                <a href="#romatic"><i className="far fa-heart" id = "icon"></i><br></br><p className="typeNameIcon">โรแมนติก</p></a>
                <a href="#drama"><i className="far fa-sad-tear" id = "icon"></i><br></br><p className="typeNameIcon">ดราม่า</p></a>
                <a href="#comedy"><i className="far fa-laugh-squint" id = "icon"></i><br></br><p className="typeNameIcon">คอมเมดี้</p></a>
                <a href="#feelgood"><i className="far fa-grin-tongue-wink" id = "icon"></i><br></br><p className="typeNameIcon">ฟิลกู๊ด</p></a>
                <a href="#yaoi"><i className="fas fa-mars-double" id = "icon"></i><br></br><p className="typeNameIcon">วาย</p></a>
                <a href="#yuri"><i className="fas fa-venus-double" id = "icon"></i><br></br><p className="typeNameIcon">ยูริ</p></a>
                <a href="#comedy"><i className="far fa-laugh-squint" id = "icon"></i><br></br><p className="typeNameIcon">คอมเมดี้</p></a>
                <a href="#feelgood"><i className="far fa-grin-tongue-wink" id = "icon"></i><br></br><p className="typeNameIcon">ฟิลกู๊ด</p></a>
                <a href="#yaoi"><i className="fas fa-mars-double" id = "icon"></i><br></br><p className="typeNameIcon">วาย</p></a>
                <a href="#yuri"><i className="fas fa-venus-double" id = "icon"></i><br></br><p className="typeNameIcon">ยูริ</p></a>
                <a href="#addmore"><i className="fas fa-angle-double-right" id = "icon"></i><p className="typeNameIcon">เพิ่มเติม</p></a>
            </div>
            </center>
            </div>         
            );
    }
    export default Typebar;