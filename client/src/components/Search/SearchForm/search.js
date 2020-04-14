import React, { Component } from 'react';
import './search.css';
import { connect } from 'react-redux'
import Navbar from '../../../components/Bar/NavBar/NavBar'
import { searchReview } from '../../../Redux/Actions/searchAction'


const mapStateToProps = state => {
    return {
        user: state.user
    }
}
class Search extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Navbar />
                <h1 className="head1">ค้นหารีวิวนิยาย</h1>
                <form>
                    <p className="inputP">ชื่อเรื่อง: <input className="blank" type="text" name="novelname" placeholder="ใส่ชื่อเรื่องมาเลยจ้า" /></p>
                    <p className="inputP">หมวดหมู่: <button id="choosetype" onClick = "Myfunction">เลือกหมวดหมู่</button></p>
                    <p className="inputP">แฮชแท็ก: <input className="blank" type="text" name="้hashtag" placeholder="ex.ชายสี่หมี่ไก่" /></p>
                    <p className="inputP">สถานะนิยาย: <input type="checkbox" id="myCheck" onclick="myFunction()"></input>จบแล้ว<input type="checkbox" id="myCheck" onclick="myFunction()"></input>ยังไม่จบ</p>
                    <p className="inputP">คำค้นหา: <input className="blank" type="text" name="searchname" placeholder="Ex.โรงเรียน วัยรุ่น" /></p>
                    <p className="inputP">ลักษณะตัวละคร: <input className="blank" type="text" name="aboutcharactor" placeholder="Ex.พระเอกรวย ตำรวจ ทหาร" /></p>
                    <center><button className="searchbutton">ค้นหา</button>&nbsp;&nbsp;&nbsp;&nbsp;<button className="cancelbutton">ยกเลิก</button></center>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, {searchReview})(Search);