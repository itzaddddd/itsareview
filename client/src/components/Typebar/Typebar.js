import React from 'react';
import './Typebar.css';


function Typebar(){
    return(
        <div>
            <center>
            <div class="choosetypepopup">
                <a href="#romatic"><i class="far fa-heart iconTypeBar"></i><br></br>โรแมนติก</a>
                <a href="#drama"><i class="far fa-sad-tear iconTypeBar"></i><br></br>ดราม่า</a>
                <a href="#comedy"><i class="far fa-laugh-squint iconTypeBar"></i><br></br>คอมเมดี้</a>
                <a href="#feelgood"><i class="far fa-grin-tongue-wink iconTypeBar" ></i><br></br>ฟิลกู๊ด</a>
                <a href="#yaoi"><i class="fas fa-mars-double iconTypeBar"></i><br></br>วาย</a>
                <a href="#yuri"><i class="fas fa-venus-double iconTypeBar"></i><br></br>ยูริ</a>
                <a href="#addmore"><i class="fas fa-angle-double-right iconTypeBar"></i>เพิ่มเติม</a>
            </div>
            </center>
            </div>         
            );
    }
    export default Typebar;