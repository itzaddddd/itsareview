import React from 'react';
import './Typebar.css';


function Typebar(){
    return(
        <div>
            <center>
            <div className="choosetypepopup">
                <a href="#romatic"><i className="far fa-heart" id = "icon"></i><br></br><text className="typeNameIcon">โรแมนติก</text></a>
                <a href="#drama"><i className="far fa-sad-tear" id = "icon"></i><br></br><text className="typeNameIcon">ดราม่า</text></a>
                <a href="#comedy"><i className="far fa-laugh-squint" id = "icon"></i><br></br><text className="typeNameIcon">คอมเมดี้</text></a>
                <a href="#feelgood"><i className="far fa-grin-tongue-wink" id = "icon"></i><br></br><text className="typeNameIcon">ฟิลกู๊ด</text></a>
                <a href="#yaoi"><i className="fas fa-mars-double" id = "icon"></i><br></br><text className="typeNameIcon">วาย</text></a>
                <a href="#yuri"><i className="fas fa-venus-double" id = "icon"></i><br></br><text className="typeNameIcon">ยูริ</text></a>
                <a href="#comedy"><i className="far fa-laugh-squint" id = "icon"></i><br></br><text className="typeNameIcon">คอมเมดี้</text></a>
                <a href="#feelgood"><i className="far fa-grin-tongue-wink" id = "icon"></i><br></br><text className="typeNameIcon">ฟิลกู๊ด</text></a>
                <a href="#yaoi"><i className="fas fa-mars-double" id = "icon"></i><br></br><text className="typeNameIcon">วาย</text></a>
                <a href="#yuri"><i className="fas fa-venus-double" id = "icon"></i><br></br><text className="typeNameIcon">ยูริ</text></a>
                <a href="#addmore"><i className="fas fa-angle-double-right" id = "icon"></i><text className="typeNameIcon">เพิ่มเติม</text></a>
            </div>
            </center>
            </div>         
            );
    }
    export default Typebar;