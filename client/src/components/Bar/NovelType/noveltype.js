import React from 'react';
import './noveltype.css';


function Noveltype(){
    return(
        <div>
            <p className="cateP">หมวดหมู่กระทู้ <button id="writereview">เขียนรีวิวนิยาย</button></p>
            <hr className="line"></hr>
            <center>
                <div className="typebar">
                    <a href="#romatic"><i class="far fa-heart"></i><br></br>โรแมนติก</a>
                    <a href="#drama"><i class="far fa-sad-tear"></i><br></br>ดราม่า</a>
                    <a href="#comedy"><i class="far fa-laugh-squint"></i><br></br>คอมเมดี้</a>
                    <a href="#feelgood"><i class="far fa-grin-tongue-wink"></i><br></br>ฟิลกู๊ด</a>
                    <a href="#yaoi"><i class="fas fa-mars-double"></i><br></br>วาย</a>
                    <a href="#yuri"><i class="fas fa-venus-double"></i><br></br>ยูริ</a>
                    <a href="#ect"><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> เพิ่มเติม</a>
                </div>
            </center>
            
            <p className ="poppularboardhead">กระทู้ยอดนิยม</p>
        </div>
        )
    }
    export default Noveltype;