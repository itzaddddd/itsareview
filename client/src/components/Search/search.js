import React, { Component } from 'react';

class Search extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>ค้นหารีวิวนิยาย</h1>
                <p>ชื่อเรื่อง: <input type="text" name="novelname" placeholder="ใส่ชื่อเรื่องมาเลยจ้า" /></p>
                <p>หมวดหมู่: <select name="group" id="group">
                  <option value="0">โรแมนติก</option>
                  <option value="1">ดราม่า</option>
                  <option value="2">คอมเมดี้</option>
                  <option value="3">ฟีลกู๊ด</option>
                  <option value="4">วาย</option>
                  <option value="5">ยูริ</option>
                  <option value="6">แฟนฟิค</option>
                  <option value="7">แฟนตาซี</option>
                  <option value="8">ผจญภัย</option>
                  <option value="9">กาลเวลา</option>
                  <option value="10">เกมออนไลน์</option>
                  <option value="11">จีนโบราณ</option>
                  <option value="12">แอ็คชั่น</option>
                  <option value="13">สงคราม</option>
                  <option value="14">สืบสวน</option>
                  <option value="15">ฆาตกรรม</option>
                  <option value="16">สยอง/ระทึกขวัญ</option>
                            </select></p>    
    
                <p>แฮชแท็ก: <input type="text" name="้hashtag" placeholder="ex.ชายสี่หมี่ไก่" /></p>
                <p>สถานะนิยาย:</p>
    
                <p>คำค้นหา: <input type="text" name="searchname" placeholder="Ex.โรงเรียน วัยรุ่น" /></p>
                <p>ลักษณะตัวละคร: <input type="text" name="aboutcharactor" placeholder="Ex.พระเอกรวย ตำรวจ ทหาร" /></p>
                <button type="button">ค้นหา</button><button type="button">ยกเลิก</button>
            </div>
    
        )
    }
}

export default Search;