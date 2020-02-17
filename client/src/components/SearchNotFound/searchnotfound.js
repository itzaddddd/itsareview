import React from 'react';
import './searchnotfound.css';

function Searchnotfound(){
    return(
        <div>
            <h1 className="Notice"><i class="fas fa-search"></i>ผลการค้นหารีวิวนิยาย</h1>
            <p className="Notice">ไม่พบข้อมูลที่ค้นหา</p>
            <center><i class="far fa-times-circle"></i></center>
        </div>
        )
    }
    
    export default Searchnotfound;