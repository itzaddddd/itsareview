import React, { Component } from 'react';

class Noveltype extends Component{
    render(){
        return(
            <div>
                <h1>หมวดหมู่กระทู้</h1>
                <select name="group" id="group">
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
                  </select>
                
            </div>
        )        
    }
}
export default Noveltype;